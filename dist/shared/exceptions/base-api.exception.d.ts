import { HttpException } from '@nestjs/common';
export declare class BaseApiException extends HttpException {
    localizedMessage: Record<string, string>;
    details: string | Record<string, any>;
    constructor(message: string, status: number, details?: string | Record<string, any>, localizedMessage?: Record<string, string>);
}
