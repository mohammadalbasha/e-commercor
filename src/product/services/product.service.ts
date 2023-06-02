import { BadRequestException, Injectable } from '@nestjs/common';
import { ProductRepository } from '../repositories/product.repository';
import { CreateProductDto } from '../dtos/create-product.dto';
import { CategoryService } from 'src/category/services/category.service';

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
}
