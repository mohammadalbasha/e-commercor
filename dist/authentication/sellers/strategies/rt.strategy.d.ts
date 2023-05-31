import { Request } from 'express';
import { ConfigService } from '@nestjs/config';
import { JwtPayload, JwtPayloadWithRt } from 'src/authentication/types';
declare const RtSellerStrategy_base: new (...args: any[]) => any;
export declare class RtSellerStrategy extends RtSellerStrategy_base {
    constructor(config: ConfigService);
    validate(req: Request, payload: JwtPayload): JwtPayloadWithRt;
}
export {};
