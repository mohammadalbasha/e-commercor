import { Module } from '@nestjs/common';
import { PaypalService } from './services/paypal.service';
import { PaypalController } from './controllers/paypal/paypal.controller';
import { SharedModule } from 'src/shared/shared.module';
import { StoreModule } from 'src/store/store.module';

@Module({
  imports: [SharedModule, StoreModule],
  providers: [PaypalService],
  controllers: [PaypalController],
  exports: [PaypalService],
})
export class PaypalModule {}
