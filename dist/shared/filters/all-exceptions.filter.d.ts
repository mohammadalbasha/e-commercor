import { ArgumentsHost, ExceptionFilter } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppLogger } from '../logger/logger.service';
export declare class AllExceptionsFilter<T> implements ExceptionFilter {
    private config;
    private readonly logger;
    constructor(config: ConfigService, logger: AppLogger);
    catch(exception: T, host: ArgumentsHost): any;
}
