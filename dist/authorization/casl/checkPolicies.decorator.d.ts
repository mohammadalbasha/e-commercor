import { PolicyHandler } from "./policyHandler.interface";
export declare const CHECK_POLICIES_KEY = "check_policy";
export declare const Can: (...handlers: PolicyHandler[]) => import("@nestjs/common").CustomDecorator<string>;
