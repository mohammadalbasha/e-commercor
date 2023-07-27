import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from './shared/shared.module';
import { UtilsModule } from './utils/utils.module';
import { StoreModule } from './store/store.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { PaypalModule } from './paypal/paypal.module';

import { CustomerModule } from './customer/customer.module';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { OrderModule } from './order/order.module';
import { UniqueMulti } from './shared/validation/uniqueMulti.validator';
import { Unique } from './shared/validation/unique.validator';
import { IsRef } from './shared/validation/isRef.validator';
import { MediaFileModule } from './file/file.module';
import { UniqueCategoryName } from './shared/validation/uniqueCategoryName.validator';
import { ClsModule } from 'nestjs-cls';
import { CollectionModule } from './collection/collection.module';
import { FeedbackModule } from './feedback/feedback.module';

@Module({
  imports: [
    ClsModule.forRoot({
      middleware: {
        mount: true,
        setup: (cls, req) => {
          cls.set('req', req);
        },
      },
    }),
    SharedModule,
    UtilsModule,
    StoreModule,
    AuthenticationModule,
    CustomerModule,
    ProductModule,
    CategoryModule,
    CollectionModule,
    OrderModule,
    MediaFileModule,
    FeedbackModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,

    // Validators (using AppModule as Container for Validations)
    // those better to be in shared module
    Unique,
    UniqueMulti,
    UniqueCategoryName,
    IsRef,
  ],
})
export class AppModule {}
