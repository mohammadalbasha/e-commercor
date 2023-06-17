import { ConfigService } from '@nestjs/config';
declare const AtAdminStrategy_base: new (...args: any[]) => any;
export declare class AtAdminStrategy extends AtAdminStrategy_base {
    constructor(config: ConfigService);
    validate(payload: any): any;
}
export {};
