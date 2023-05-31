import { ConfigService } from '@nestjs/config';
import { PasswordService } from 'src/authentication/password.service';
import { LoginDto } from 'src/authentication/dtos/login.dto';
import { Tokens } from 'src/authentication/types';
import { JwtService } from '@nestjs/jwt';
import { CustomerService } from 'src/customer/services/customer.service';
export declare class AuthCustomerService {
    private jwtService;
    private config;
    private customerService;
    private passwordService;
    constructor(jwtService: JwtService, config: ConfigService, customerService: CustomerService, passwordService: PasswordService);
    login(data: LoginDto, storeId: string): Promise<Tokens>;
    refreshTokens(customerId: string, rt: string): Promise<Tokens>;
    getTokens(customerId: string, email: string, storeId: string): Promise<Tokens>;
}
