import { Module } from '@nestjs/common';
import { CollectionService } from './services/collection.service';
import { CollectionSellerController } from './controllers/seller/collection.controller';
import { CollectionRepository } from './repositories/collection.repository';
import { MongooseModule } from '@nestjs/mongoose';
import { Collection, CollectionSchema } from './models/collection.model';
import { CollectionCustomerController } from './controllers/customer/collection.controller';
import { ProductModule } from 'src/product/product.module';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Collection.name, schema: CollectionSchema },
    ]),
    ProductModule,
  ],
  providers: [CollectionService, CollectionRepository],
  controllers: [CollectionSellerController, CollectionCustomerController],
  exports: [CollectionService],
})
export class CollectionModule {}
