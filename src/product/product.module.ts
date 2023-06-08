import { Module } from '@nestjs/common';
import { ProductRepository } from './repositories/product.repository';
import { ProductService } from './services/product.service';
import { ProductSellerController } from './controllers/seller/product.controller';
import { CategoryModule } from 'src/category/category.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './models/product.model';
import { ProductCustomerController } from './controllers/customer/product.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }]),
    CategoryModule,
  ],
  controllers: [ProductSellerController, ProductCustomerController],
  providers: [ProductService, ProductRepository],
  exports: [ProductService],
})
export class ProductModule {}
