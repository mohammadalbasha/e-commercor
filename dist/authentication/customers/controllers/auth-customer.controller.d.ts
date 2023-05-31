import { Tokens } from 'src/authentication/types';
import { AuthCustomerService } from '../services/auth-customer.service';
import { LoginDto } from 'src/authentication/dtos/login.dto';
import { Store } from 'src/store/models/store.model';
export declare class AuthCustomerController {
    private authCustomerService;
    constructor(authCustomerService: AuthCustomerService);
    signinLocal(data: LoginDto, store: Store): Promise<Tokens>;
    refreshTokens(customerId: string, refreshToken: string): Promise<Tokens>;
}
