import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';

import { AllExceptionsFilter } from './filters/all-exceptions.filter';
import { ConfigModule } from '@nestjs/config';
import { configModuleOptions } from './configs/module-options';
import { AppLoggerModule } from './logger/logger.module';
import { Unique } from './validation/unique.validator';
import { UniqueMulti } from './validation/uniqueMulti.validator';
import { IsRef } from './validation/isRef-old.validator';
import { GetCurrentStore } from './current-store/current-store.decorator';
import { GetStoreMiddleware } from './current-store/get-store.middleware';
import { StoreModule } from 'src/store/store.module';
@Module({
  imports: [
    ConfigModule.forRoot(configModuleOptions),
    AppLoggerModule,
    // TODO:
    // refactoring
    // maybe but the current store moddleware in store module
    StoreModule,
  ],
  providers: [
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class SharedModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(GetStoreMiddleware)
      .exclude('seller/(.*)', 'file/(.*)')
      .forRoutes('/:storeId/*');
  }
}
