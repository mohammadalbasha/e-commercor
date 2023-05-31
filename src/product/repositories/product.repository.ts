import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import { classToPlain, plainToClass } from 'class-transformer';
import mongoose from 'mongoose';
import { Product, ProductDocument } from 'src/product/models/product.model';
import { CreateProductDto } from '../dtos/create-product.dto';

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
}
