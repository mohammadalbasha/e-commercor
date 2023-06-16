import {
  ForbiddenException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PasswordService } from 'src/authentication/password.service';
import {
  AccessTokenConfig,
  RefreshTokenConfig,
} from 'src/shared/configs/config.interface';
import { StoreService } from 'src/store/services/store.service';
import * as argon from 'argon2';
import { LoginDto } from 'src/authentication/dtos/login.dto';
import { Tokens, JwtPayload } from 'src/authentication/types';
import { JwtService } from '@nestjs/jwt';
import { CustomerService } from 'src/customer/services/customer.service';

@Injectable()
export class AuthCustomerService {
  constructor(
    private jwtService: JwtService,
    private config: ConfigService,
    private customerService: CustomerService,
    private passwordService: PasswordService,
  ) {}

  async login(data: LoginDto, storeId: string): Promise<Tokens> {
    // TODO:
    // refactoring
    const customer = await this.customerService.findByEmailAndStoreId(
      data.email,
      storeId,
    );

    if (!customer)
      throw new NotFoundException('Customer with this email not found');

    const passwordMatches = await this.passwordService.validatePassword(
      data.password,
      customer.password,
    );

    if (!passwordMatches) throw new ForbiddenException('passwrod incorrect');

    const tokens = await this.getTokens(customer.id, customer.email, storeId);
    return tokens;
  }

  async refreshTokens(customerId: string, rt: string): Promise<Tokens> {
    // TODO:
    // refactoring
    const customer = await this.customerService.findById(customerId);
    const tokens = await this.getTokens(
      customer.id,
      customer.email,
      customer.id,
    );
    return tokens;
  }

  async getTokens(
    customerId: string,
    email: string,
    storeId: string,
  ): Promise<Tokens> {
    const jwtPayload: JwtPayload = {
      sub: customerId,
      email: email,
      storeId: storeId,
    };

    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: this.config.get<AccessTokenConfig>('accessTokenCustomer')
          .secret,
        expiresIn: this.config.get<AccessTokenConfig>('accessTokenCustomer')
          .expiresIn,
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret: this.config.get<RefreshTokenConfig>('refreshTokenCustomer')
          .secret,
        expiresIn: this.config.get<RefreshTokenConfig>('refreshTokenCustomer')
          .expiresIn,
      }),
    ]);

    return {
      access_token: at,
      refresh_token: rt,
    };
  }
}
