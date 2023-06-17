import { Module, forwardRef } from '@nestjs/common';
import { StoreService } from './services/store.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Store, StoreSchema } from './models/store.model';
import { StoreRepository } from './repositories/store.repository';
import { AuthenticationModule } from 'src/authentication/authentication.module';
import { StoreSellerController } from './controllers/seller/store.controller';
import { StoreCustomerController } from './controllers/customer/store.controller';
import { StoreAdminController } from './controllers/admin/store.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Store.name, schema: StoreSchema }]),
    forwardRef(() => AuthenticationModule),
  ],
  controllers: [
    StoreAdminController,
    StoreSellerController,
    StoreCustomerController,
  ],
  providers: [StoreService, StoreRepository],
  exports: [StoreService],
})
export class StoreModule {}
