import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ProductRepository } from '../repositories/product.repository';
import { CreateProductDto } from '../dtos/create-product.dto';
import { CategoryService } from 'src/category/services/category.service';
import { filterToMongo } from 'src/shared/mongoose/helperFunctions/filter.helper';
import { UpdateProductDto } from '../dtos/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    private productRepo: ProductRepository,
    private categroyService: CategoryService,
  ) {}

  validateProductData(productProperties: any, data: CreateProductDto) {
    const { storeId, categoryId, ...productData } = data;
    //TODO:
    // be aware of this _doc
    const productPropertiesKeys = Object.keys(productProperties._doc);
    const productDataKeys = Object.keys(productData);
    for (let key of productDataKeys) {
      if (key == 'tag') continue;
      if (!productPropertiesKeys.includes(key)) {
        throw new BadRequestException(
          `${key} is invalid property for this product`,
        );
      }
    }
    // another syntax
    /*
    const isValid = productDataKeys.every((key) => {
      return productPropertiesKeys.includes(key)
    })
    */
  }

  // {maxPrice = 100, minPrice = 30, name = "kaka"}

  convertFilters(filters) {
    const output = {};
    for (const key in filters) {
      let [type, name] = key.split(/(?=[A-Z])/);
      if (type != 'min' && type != 'max') {
        output[key] = filters[key];
        continue;
      }
      name = name.toLowerCase();
      const value = filters[key];
      if (!output[name]) {
        output[name] = {};
      }
      output[name][type] = value;
    }

    return output;
  }

  async create(data: CreateProductDto) {
    const categoryId = data.categoryId;
    const category = await this.categroyService.findById(categoryId);
    this.validateProductData(category.productProperties, data);

    return this.productRepo.create(data);
  }

  async increamentCount(
    filter: { productId: string; version: number },
    session,
  ) {
    return this.productRepo.inceramentCount(filter, session);
  }

  async decreamentCount(
    filter: { productId: string; version: number },
    session,
  ) {
    return this.productRepo.decreamentCount(filter, session);
  }

  async findById(productId: string, session?) {
    return this.productRepo.findById(productId, session);
  }

  async findByIdWithStyle(productId: string) {
    let product = await this.productRepo.findById(productId);
    const category = await this.categroyService.findById(product.categoryId);
    product = product['_doc'];
    return {
      ...product,
      categoryName: category.name,
      categoryIsSale: category.isSale,
      categorySaleValue: category.saleValue,
      cardProperties: category?.cardProperties,
      productProperties: category?.productProperties,
    };
  }

  async find(categoryId, filters, page, limit) {
    //const category = await this.categroyService.findById(categoryId);
    if (filters) {
      filters = this.convertFilters(filters);
      filters = filterToMongo(filters);
    }
    return this.productRepo.find(categoryId, filters || {}, page, limit);
  }

  async findByIdAndUpdate(productId: string, data: UpdateProductDto) {
    const product = await this.productRepo.findById(productId);
    if (!product) throw new NotFoundException('product not found');
    // TODO:
    // refactoring
    // find and update

    return this.productRepo.findByIdAndUpdate(productId, data);
  }

  async findByIdAndDelete(productId: string) {
    const product = await this.productRepo.findById(productId);
    // TODO:
    // refactoring
    // find and delete

    if (!product) throw new NotFoundException('product not found');
    // TODO:
    // check if any on progress orders related with this product
    return this.productRepo.findByIdAndDelete(productId);
  }
}
