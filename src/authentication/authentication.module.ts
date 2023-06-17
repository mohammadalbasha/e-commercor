import { Module, forwardRef } from '@nestjs/common';
import { PasswordService } from './password.service';
import { AuthSellerController } from './sellers/controllers/auth-seller.controller';
import { AuthSellerService } from './sellers/services/auth-seller.service';
import { AtSellerStrategy, RtSellerStrategy } from './sellers/strategies';
import { JwtService } from '@nestjs/jwt';
import { StoreModule } from 'src/store/store.module';
import { AuthCustomerController } from './customers/controllers/auth-customer.controller';
import { AuthCustomerService } from './customers/services/auth-customer.service';
import { CustomerModule } from 'src/customer/customer.module';
import { AtCustomerStrategy, RtCustomerStrategy } from './customers/strategies';
import { AtAdminStrategy, RtAdminStrategy } from './customers copy/strategies';
import { AuthAdminController } from './customers copy/controllers/auth-admin.controller';
import { SharedModule } from 'src/shared/shared.module';
import { AuthAdminService } from './customers copy/services/auth-admin.service';

@Module({
  providers: [
    PasswordService,
    AuthSellerService,
    AtSellerStrategy,
    RtSellerStrategy,
    AtCustomerStrategy,
    RtCustomerStrategy,
    JwtService,
    AuthCustomerService,
    AtAdminStrategy,
    RtAdminStrategy,
    AuthAdminService,
  ],
  exports: [PasswordService, AuthSellerService],
  imports: [
    forwardRef(() => SharedModule),
    forwardRef(() => StoreModule),
    forwardRef(() => CustomerModule),
  ],
  controllers: [
    AuthAdminController,
    AuthSellerController,
    AuthCustomerController,
  ],
})
export class AuthenticationModule {}
