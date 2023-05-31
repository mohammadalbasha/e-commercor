import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Reflector } from "@nestjs/core";
import { Connection } from "mongoose";
export declare class PoliciesGuard implements CanActivate {
    private reflector;
    private connection;
    constructor(reflector: Reflector, connection: Connection);
    canActivate(context: ExecutionContext): Promise<boolean>;
}
