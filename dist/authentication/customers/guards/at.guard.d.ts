import { ExecutionContext } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
declare const AtCustomerGuard_base: import("@nestjs/passport").Type<import("@nestjs/passport").IAuthGuard>;
export declare class AtCustomerGuard extends AtCustomerGuard_base {
    private reflector;
    constructor(reflector: Reflector);
    handleRequest(err: any, user: any, info: any, context: ExecutionContext): any;
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | import("rxjs").Observable<boolean>;
}
export {};
