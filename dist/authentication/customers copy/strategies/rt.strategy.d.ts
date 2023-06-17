import { Request } from 'express';
import { ConfigService } from '@nestjs/config';
declare const RtAdminStrategy_base: new (...args: any[]) => any;
export declare class RtAdminStrategy extends RtAdminStrategy_base {
    constructor(config: ConfigService);
    validate(req: Request, payload: any): any;
}
export {};
