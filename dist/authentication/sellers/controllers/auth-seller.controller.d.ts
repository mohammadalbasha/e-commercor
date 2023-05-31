import { Tokens } from 'src/authentication/types';
import { AuthSellerService } from '../services/auth-seller.service';
import { LoginDto } from 'src/authentication/dtos/login.dto';
export declare class AuthSellerController {
    private authSellerService;
    constructor(authSellerService: AuthSellerService);
    signinLocal(data: LoginDto): Promise<Tokens>;
    logout(sellerId: string): Promise<boolean>;
    refreshTokens(sellerId: string, refreshToken: string): Promise<Tokens>;
}
