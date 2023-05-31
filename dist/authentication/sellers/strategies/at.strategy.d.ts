import { ConfigService } from '@nestjs/config';
import { JwtPayload } from 'src/authentication/types';
declare const AtSellerStrategy_base: new (...args: any[]) => any;
export declare class AtSellerStrategy extends AtSellerStrategy_base {
    constructor(config: ConfigService);
    validate(payload: JwtPayload): JwtPayload;
}
export {};
