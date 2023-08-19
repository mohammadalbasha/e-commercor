import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { classToPlain, plainToClass } from 'class-transformer';
import mongoose, { mongo } from 'mongoose';
import { Product, ProductDocument } from 'src/product/models/product.model';
import { CreateProductDto } from '../dtos/create-product.dto';
import { UpdateProductDto } from '../dtos/update-product.dto';
import { NotFoundException } from '@nestjs/common';

export class ProductRepository {
  constructor(
    @InjectModel(Product.name)
    private readonly product: mongoose.Model<Product & ProductDocument>,
    @InjectConnection() protected connection: mongoose.Connection,
  ) {}

  async create(data: CreateProductDto) {
    const product = await this.product.create(data);
    return product;
  }

  async findById(productId: string, session?) {
    //  await this.product.updateMany({}, { isSale: false, saleValue: 0 });
    // await this.product.updateMany(
    //   {},
    //   { $unset: { imagesIds: 1 }, $set: { isSale: false, saleValue: 0 } },
    //   { multi: true },
    // );
    const product = session
      ? await this.product.findById(productId).session(session)
      : await this.product.findById(productId);
    return product;
  }

  async decreamentCount(
    filter: { productId: string; version: number },
    // options: { new: boolean; session? } = { new: true },
    session,
  ) {
    const product = await this.product.findOneAndUpdate(
      {
        _id: filter.productId,
        version: filter.version,
      },
      { $inc: { count: -1, version: 1 } },
      // {session: options.session, new: true}
      { session: session, new: true },
    );
    return product;
  }

  async inceramentCount(
    filter: { productId: string; version: number },
    // options: { new: boolean; session? } = { new: true },
    session,
  ) {
    return this.product.findOneAndUpdate(
      {
        _id: filter.productId,
        version: filter.version,
      },
      { $inc: { count: 1, version: 1 } },
      // {session: options.session, new: true}
      { session: session, new: true },
    );
  }

  async find(categoryId, filters, page, limit) {
    const skip = (+page - 1) * limit;
    filters['categoryId'] = new mongoose.Types.ObjectId(categoryId);

    const items = await this.product
      .find(filters)
      .skip(skip)
      .limit(limit)
      .exec();
    const count = await this.product.countDocuments(filters).exec();

    return {
      items,
      totalPages: Math.ceil(count / limit),
      currentPage: +page,
      totalItems: count,
    };
  }

  async findByStoreId(storeId: string) {
    let products = await this.product
      .find(
        { storeId: storeId },
        {
          name: 1,
          count: 1,
          price: 1,
          Imagesproduct: 1,
          categoryId: 1,
          isSale: 1,
          saleValue: 1,
        },
      )
      .populate('category', { name: 1, id: 1 });

    return products;
  }

  async findByIdAndUpdate(id: string, data: Partial<UpdateProductDto>) {
    return this.product.findByIdAndUpdate(id, data);
  }

  findByIdAndDelete(id: string) {
    return this.product.findByIdAndDelete(id);
  }

  async findSimilarProducts(productId: string) {
    const product = await this.product
      .findById(productId)
      .populate('collections')
      .exec();

    if (!product) {
      throw new NotFoundException('Product not found');
    }

    // This code must be refactored
    // there is no type safety
    // but this is mandatory here because of using virtual properties
    let collectionsProductsIds = [];
    for (let i = 0; i < product['collections'].length; i++) {
      collectionsProductsIds = [
        ...collectionsProductsIds,
        ...product['collections'][i]['productsIds'],
      ];
    }

    // Find products with common tags
    const similarProductsByTags = await this.product.find({
      storeId: product.storeId,
      _id: { $ne: product._id },
      tags: { $in: product.tags },
    });
    // Find products with common categories
    const similarProductsByCategories = await this.product
      .find({
        storeId: product.storeId,
        _id: {
          $ne: productId,
          $in: collectionsProductsIds,
        },
      })
      .exec();

    // Combine the three sets of products and remove duplicates
    const similarProducts = [
      ...new Set([...similarProductsByTags, ...similarProductsByCategories]),
    ];

    return similarProducts;
  }
}
