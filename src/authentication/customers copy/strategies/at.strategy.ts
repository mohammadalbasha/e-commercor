import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { AccessTokenConfig } from 'src/shared/configs/config.interface';

@Injectable()
export class AtAdminStrategy extends PassportStrategy(Strategy, 'jwt-admin') {
  constructor(config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get<AccessTokenConfig>('accessTokenSeller').secret,
    });
  }

  validate(payload) {
    return payload;
  }
}
