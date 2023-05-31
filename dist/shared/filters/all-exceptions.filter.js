"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var AllExceptionsFilter_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const constants_1 = require("../constants");
const base_api_exception_1 = require("../exceptions/base-api.exception");
const logger_service_1 = require("../logger/logger.service");
const util_1 = require("../request-context/util");
let AllExceptionsFilter = AllExceptionsFilter_1 = class AllExceptionsFilter {
    constructor(config, logger) {
        this.config = config;
        this.logger = logger;
        this.logger.setContext(AllExceptionsFilter_1.name);
        process.on('uncaughtException', (err) => {
            console.log(`😱 Uncaught Exception Error: ${err.message}\n${err.stack}`, 'AllExceptionsFilter');
        });
        process.on('unhandledRejection', (reason, promise) => {
            console.log(`😱 Unhandled Rejection Error: ${reason}\n${reason.stack}`, 'AllExceptionsFilter');
        });
    }
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const req = ctx.getRequest();
        const res = ctx.getResponse();
        const path = req.url;
        const timestamp = new Date().toISOString();
        const requestId = req.headers[constants_1.REQUEST_ID_TOKEN_HEADER];
        const requestContext = (0, util_1.createRequestContext)(req);
        let stack;
        let statusCode;
        let errorName;
        let message;
        let details;
        const acceptedLanguage = 'ja';
        let localizedMessage;
        if (exception instanceof base_api_exception_1.BaseApiException) {
            statusCode = exception.getStatus();
            errorName = exception.constructor.name;
            message = exception.message;
            localizedMessage = exception.localizedMessage[acceptedLanguage];
            details = exception.details || exception.getResponse();
        }
        else if (exception instanceof common_1.HttpException) {
            statusCode = exception.getStatus();
            errorName = exception.constructor.name;
            message = exception.message;
            details = exception.getResponse();
        }
        else if (exception instanceof Error) {
            errorName = exception.constructor.name;
            message = exception.message;
            stack = exception.stack;
        }
        statusCode = statusCode || common_1.HttpStatus.INTERNAL_SERVER_ERROR;
        errorName = errorName || 'InternalException';
        message = message || 'Internal server error';
        const error = {
            statusCode,
            message,
            localizedMessage,
            errorName,
            details,
            path,
            requestId,
            timestamp,
        };
        this.logger.warn(requestContext, error.message, {
            error,
            stack,
        });
        const isProMood = this.config.get('env') !== 'development';
        if (isProMood && statusCode === common_1.HttpStatus.INTERNAL_SERVER_ERROR) {
            error.message = 'Internal server error';
        }
        res.status(statusCode).json({ error });
    }
};
AllExceptionsFilter = AllExceptionsFilter_1 = __decorate([
    (0, common_1.Catch)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        logger_service_1.AppLogger])
], AllExceptionsFilter);
exports.AllExceptionsFilter = AllExceptionsFilter;
//# sourceMappingURL=all-exceptions.filter.js.map