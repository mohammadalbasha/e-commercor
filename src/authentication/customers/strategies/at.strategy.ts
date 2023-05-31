import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from 'src/authentication/types';
import { AccessTokenConfig } from 'src/shared/configs/config.interface';

@Injectable()
export class AtCustomerStrategy extends PassportStrategy(
  Strategy,
  'jwt-customer',
) {
  constructor(config: ConfigService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: config.get<AccessTokenConfig>('accessTokenCustomer').secret,
    });
  }

  validate(payload: JwtPayload) {
    return payload;
  }
}
