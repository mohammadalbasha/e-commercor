import {
  ForbiddenException,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PasswordService } from 'src/authentication/password.service';
import {
  AccessTokenConfig,
  RefreshTokenConfig,
} from 'src/shared/configs/config.interface';
import { LoginAdminDto } from 'src/authentication/dtos/login.dto';
import { Tokens } from 'src/authentication/types';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthAdminService {
  constructor(private jwtService: JwtService, private config: ConfigService) {}

  async login(data: LoginAdminDto): Promise<Tokens> {
    // TODO:
    // refactoring
    const credentials = await this.config.get('adminAuth');
    if (
      data.username != credentials.username ||
      data.password != credentials.password
    ) {
      throw new UnauthorizedException('Invalid Credentials');
    }

    const tokens = await this.getTokens(credentials.username);
    return tokens;
  }

  async refreshTokens(rt): Promise<Tokens> {
    const tokens = await this.getTokens(rt.username);
    return tokens;
  }

  async getTokens(username: string): Promise<Tokens> {
    const jwtPayload = {
      sub: username,
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
