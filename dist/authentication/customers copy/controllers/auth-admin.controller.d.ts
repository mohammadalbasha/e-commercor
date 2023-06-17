import { Tokens } from 'src/authentication/types';
import { AuthAdminService } from '../services/auth-admin.service';
import { LoginAdminDto } from 'src/authentication/dtos/login.dto';
export declare class AuthAdminController {
    private authAdminService;
    constructor(authAdminService: AuthAdminService);
    signinLocal(data: LoginAdminDto): Promise<Tokens>;
    refreshTokens(refreshToken: string): Promise<Tokens>;
}
