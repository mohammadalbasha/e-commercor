import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Tokens } from 'src/authentication/types';
import { AuthCustomerService } from '../services/auth-customer.service';
import { LoginDto } from 'src/authentication/dtos/login.dto';
import {
  Public,
  GetCurrentUserId,
  GetCurrentUser,
} from 'src/authentication/decorators';
import { RtCustomerGuard } from 'src/authentication/customers/guards';
import { GetCurrentStore } from 'src/shared/current-store/current-store.decorator';
import { Store } from 'src/store/models/store.model';

@Controller(':storeId/auth')
export class AuthCustomerController {
  constructor(private authCustomerService: AuthCustomerService) {}

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  signinLocal(
    @Body() data: LoginDto,
    @GetCurrentStore() store: Store,
  ): Promise<Tokens> {
    return this.authCustomerService.login(data, store.id);
  }

  @UseGuards(RtCustomerGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  refreshTokens(
    @GetCurrentUserId() customerId: string,
    @GetCurrentUser('refreshToken') refreshToken: string,
  ): Promise<Tokens> {
    return this.authCustomerService.refreshTokens(customerId, refreshToken);
  }
}
