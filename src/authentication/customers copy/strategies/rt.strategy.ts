import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Request } from 'express';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { RefreshTokenConfig } from 'src/shared/configs/config.interface';

@Injectable()
export class RtAdminStrategy extends PassportStrategy(
  Strategy,
  'jwt-refresh-admin',
) {
  constructor(config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get<RefreshTokenConfig>('refreshTokenSeller').secret,
      passReqToCallback: true,
    });
  }

  validate(req: Request, payload) {
    const refreshToken = req
      ?.get('authorization')
      ?.replace('Bearer', '')
      .trim();

    if (!refreshToken) throw new ForbiddenException('Refresh token malformed');

    return {
      ...payload,
      refreshToken,
    };
  }
}
