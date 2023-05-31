import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Tokens } from 'src/authentication/types';
import { AuthSellerService } from '../services/auth-seller.service';
import { LoginDto } from 'src/authentication/dtos/login.dto';
import {
  Public,
  GetCurrentUserId,
  GetCurrentUser,
} from 'src/authentication/decorators';
import { RtSellerGuard } from 'src/authentication/sellers/guards';

@Controller('seller/auth')
export class AuthSellerController {
  constructor(private authSellerService: AuthSellerService) {}

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  signinLocal(@Body() data: LoginDto): Promise<Tokens> {
    return this.authSellerService.login(data);
  }

  @Post('logout')
  @HttpCode(HttpStatus.OK)
  logout(@GetCurrentUserId() sellerId: string): Promise<boolean> {
    return this.authSellerService.logout(sellerId);
  }

  @UseGuards(RtSellerGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  refreshTokens(
    @GetCurrentUserId() sellerId: string,
    @GetCurrentUser('refreshToken') refreshToken: string,
  ): Promise<Tokens> {
    return this.authSellerService.refreshTokens(sellerId, refreshToken);
  }
}
