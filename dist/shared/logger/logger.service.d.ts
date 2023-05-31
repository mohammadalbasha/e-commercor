import { Logger } from 'winston';
import { RequestContext } from '../request-context/request-context.dto';
export declare class AppLogger {
    private context?;
    private logger;
    setContext(context: string): void;
    constructor();
    error(ctx: RequestContext, message: string, meta?: Record<string, any>): Logger;
    warn(ctx: RequestContext, message: string, meta?: Record<string, any>): Logger;
    debug(ctx: RequestContext, message: string, meta?: Record<string, any>): Logger;
    verbose(ctx: RequestContext, message: string, meta?: Record<string, any>): Logger;
    log(ctx: RequestContext, message: string, meta?: Record<string, any>): Logger;
}
