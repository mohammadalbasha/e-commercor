import { Module } from '@nestjs/common';
import { OrderService } from './services/order.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './models/order.model';
import { OrderRepository } from './repository/order.repository';
import { PaypalModule } from 'src/paypal/paypal.module';
import { ProductModule } from 'src/product/product.module';
import { OrderSellerController } from './controllers/seller/order.controller';
import { OrderCustomerController } from './controllers/customer/order.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    PaypalModule,
    ProductModule,
  ],
  controllers: [OrderSellerController, OrderCustomerController],
  providers: [OrderService, OrderRepository],
})
export class OrderModule {}
