import { ConfigService } from '@nestjs/config';
import { LoginAdminDto } from 'src/authentication/dtos/login.dto';
import { Tokens } from 'src/authentication/types';
import { JwtService } from '@nestjs/jwt';
export declare class AuthAdminService {
    private jwtService;
    private config;
    constructor(jwtService: JwtService, config: ConfigService);
    login(data: LoginAdminDto): Promise<Tokens>;
    refreshTokens(rt: any): Promise<Tokens>;
    getTokens(username: string): Promise<Tokens>;
}
