import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { Tokens } from 'src/authentication/types';
import { AuthAdminService } from '../services/auth-admin.service';
import { LoginAdminDto } from 'src/authentication/dtos/login.dto';
import { Public, GetCurrentUser } from 'src/authentication/decorators';
import { RtAdminGuard } from '../guards';

@Controller('admin/auth')
export class AuthAdminController {
  constructor(private authAdminService: AuthAdminService) {}

  @Public()
  @Post('login')
  @HttpCode(HttpStatus.OK)
  signinLocal(@Body() data: LoginAdminDto): Promise<Tokens> {
    return this.authAdminService.login(data);
  }

  @UseGuards(RtAdminGuard)
  @Post('refresh')
  @HttpCode(HttpStatus.OK)
  refreshTokens(
    @GetCurrentUser('refreshToken') refreshToken: string,
  ): Promise<Tokens> {
    return this.authAdminService.refreshTokens(refreshToken);
  }
}
