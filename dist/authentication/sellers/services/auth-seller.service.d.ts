import { ConfigService } from '@nestjs/config';
import { PasswordService } from 'src/authentication/password.service';
import { StoreService } from 'src/store/services/store.service';
import { LoginDto } from 'src/authentication/dtos/login.dto';
import { Tokens } from 'src/authentication/types';
import { JwtService } from '@nestjs/jwt';
export declare class AuthSellerService {
    private jwtService;
    private config;
    private storeService;
    private passwordService;
    constructor(jwtService: JwtService, config: ConfigService, storeService: StoreService, passwordService: PasswordService);
    login(data: LoginDto): Promise<Tokens>;
    logout(sellerId: string): Promise<boolean>;
    refreshTokens(sellerId: string, rt: string): Promise<Tokens>;
    updateRtHash(sellerId: string, rt: string): Promise<void>;
    getTokens(sellerId: string, email: string, storeId: string): Promise<Tokens>;
}
