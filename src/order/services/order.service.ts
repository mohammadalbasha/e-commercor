import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { ProductService } from 'src/product/services/product.service';
import { CreateOrderDto } from '../dtos/create-order.dto';
import { OrderRepository } from '../repository/order.repository';
import { Product } from 'src/product/models/product.model';
import { Order } from '../models/order.model';
import { PaypalService } from 'src/paypal/services/paypal.service';
import { Store } from 'src/store/models/store.model';

@Injectable()
export class OrderService {
  constructor(
    @InjectConnection() private readonly connection: mongoose.Connection,
    private productService: ProductService,
    private orderRepo: OrderRepository,
    private paypalService: PaypalService,
  ) {}

  async purchaseProduct(data: CreateOrderDto, store: Store) {
    // const session = await MongooseModule.forRootAsync({
    //   useFactory: () => ({ session: true }),
    // }).then((mongoose) => mongoose.startSession());

    const session = await this.connection.startSession();

    let updatedProduct: Product;
    let newOrder: Order;

    //await session.withTransaction( async () => {
    //const product = await this.productModel.findById(productId).session(session).setOptions({ pessimisticLock: true });

    session.startTransaction();

    try {
      const product = await this.productService.findById(
        data.productId,
        session,
      );
      if (!product) {
        throw new NotFoundException('Product not found');
      }

      if (product.count < 1) {
        throw new BadRequestException('Insufficient product count');
      }

      // const filter = { _id: productId, version: product.version };
      // const update = { $inc: { count: -quantity }, $inc: { version: 1 } };
      // const options = { new: true, runValidators: true, session: session };
      // updatedProduct = await this.productModel.findOneAndUpdate(filter, update, options).session(session);

      const updatedProduct = await this.productService.decreamentCount(
        { productId: data.productId, version: product.version },
        session,
      );

      if (!updatedProduct) {
        throw new NotFoundException('Product not found or version mismatch');
      }
      const order = await this.orderRepo.create(data, session);
      // NOTE:
      // here order created as array
      // because when we wanna use sessions in createion , we must pass an array as a first argument to the create method
      if (order.length == 0) {
        throw new InternalServerErrorException('Error creating order');
      }
      // @ts-ignore
      const paypalOrder = await this.paypalService.createOrder(
        store.paypalMerchantId,
        product.price,
        store.name,
        store.id,
        order[0].id,
      );
      if (!paypalOrder) {
        throw new InternalServerErrorException('Error creating order');
      }

      await session.commitTransaction();

      //TODO:
      // return paypal confirm order url
      return paypalOrder;
    } catch (err) {
      await session.abortTransaction();
      throw err;
    } finally {
      session.endSession();
    }
  }

  listOrdersByStore(storeId: string) {
    return this.orderRepo.listByStore(storeId);
  }

  listOrdersByUser(userId: string) {
    return this.orderRepo.listByUser(userId);
  }

  async captureOrder(storeId: string, orderId: string, token: string) {
    const isCaptured = await this.paypalService.captureOrder(token);
    console.log(isCaptured);
    await this.orderRepo.updateOne({ id: orderId }, { isCaptured: true });
    return isCaptured;

    // TODO:
    // update order
  }

  async cancelOrder(storeId: string, orderId: string) {
    // TODO:
    // update order
    const order = await this.orderRepo.findById(orderId);
    const session = await this.connection.startSession();
    session.startTransaction();

    // TODO:
    // re execute five times
    try {
      const product = await this.productService.findById(order.productId);
      await this.productService.increamentCount(
        { productId: product.id, version: product.version },
        session,
      );
      await session.commitTransaction();
    } catch {
      await session.abortTransaction();
    } finally {
      session.endSession();
    }
  }
}
