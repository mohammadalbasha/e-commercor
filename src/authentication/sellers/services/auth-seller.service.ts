import { ForbiddenException, Injectable } from '@nestjs/common';
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

@Injectable()
export class AuthSellerService {
  constructor(
    private jwtService: JwtService,
    private config: ConfigService,
    private storeService: StoreService,
    private passwordService: PasswordService,
  ) {}

  async login(data: LoginDto): Promise<Tokens> {
    // TODO:
    // refactoring

    const seller = await this.storeService.findSellerByEmail(data.email);
    if (!seller)
      throw new ForbiddenException('no seller found with this email');

    const store = await this.storeService.findBySellerId(seller.id);

    const passwordMatches = await this.passwordService.validatePassword(
      data.password,
      seller.password,
    );

    if (!passwordMatches) throw new ForbiddenException('password incorrect');

    const tokens = await this.getTokens(seller.id, seller.email, store.id);

    await this.updateRtHash(seller.id, tokens.refresh_token);

    return tokens;
  }

  async logout(sellerId: string): Promise<boolean> {
    await this.storeService.findSellerByIdAndUpdate(sellerId, {
      hashedRefreshToken: null,
    });

    return true;
  }

  async refreshTokens(sellerId: string, rt: string): Promise<Tokens> {
    // TODO:
    // refactoring
    const seller = await this.storeService.findSellerById(sellerId);
    const store = await this.storeService.findBySellerId(seller.id);

    if (!seller || !seller.hashedRefreshToken)
      throw new ForbiddenException('Access Denied');

    const rtMatches = await argon.verify(seller.hashedRefreshToken, rt);
    if (!rtMatches) throw new ForbiddenException('Access Denied');

    const tokens = await this.getTokens(seller.id, seller.email, store.id);

    await this.updateRtHash(seller.id, tokens.refresh_token);

    return tokens;
  }

  async updateRtHash(sellerId: string, rt: string): Promise<void> {
    const hashedRefreshToken = await argon.hash(rt);
    await this.storeService.findSellerByIdAndUpdate(sellerId, {
      hashedRefreshToken: hashedRefreshToken,
    });
  }

  async getTokens(
    sellerId: string,
    email: string,
    storeId: string,
  ): Promise<Tokens> {
    const jwtPayload: JwtPayload = {
      sub: sellerId,
      email: email,
      storeId: storeId,
    };

    const [at, rt] = await Promise.all([
      this.jwtService.signAsync(jwtPayload, {
        secret: this.config.get<AccessTokenConfig>('accessTokenSeller').secret,
        expiresIn:
          this.config.get<AccessTokenConfig>('accessTokenSeller').expiresIn,
      }),
      this.jwtService.signAsync(jwtPayload, {
        secret:
          this.config.get<RefreshTokenConfig>('refreshTokenSeller').secret,
        expiresIn:
          this.config.get<RefreshTokenConfig>('refreshTokenSeller').expiresIn,
      }),
    ]);

    return {
      access_token: at,
      refresh_token: rt,
    };
  }
}
