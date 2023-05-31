import { Request } from 'express';
import { ConfigService } from '@nestjs/config';
import { JwtPayload, JwtPayloadWithRt } from 'src/authentication/types';
declare const RtCustomerStrategy_base: new (...args: any[]) => any;
export declare class RtCustomerStrategy extends RtCustomerStrategy_base {
    constructor(config: ConfigService);
    validate(req: Request, payload: JwtPayload): JwtPayloadWithRt;
}
export {};
