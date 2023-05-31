import { ConfigService } from '@nestjs/config';
import { JwtPayload } from 'src/authentication/types';
declare const AtCustomerStrategy_base: new (...args: any[]) => any;
export declare class AtCustomerStrategy extends AtCustomerStrategy_base {
    constructor(config: ConfigService);
    validate(payload: JwtPayload): JwtPayload;
}
export {};
