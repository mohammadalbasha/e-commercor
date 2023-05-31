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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppLogger = void 0;
const common_1 = require("@nestjs/common");
const winston_1 = require("winston");
let AppLogger = class AppLogger {
    setContext(context) {
        this.context = context;
    }
    constructor() {
        this.logger = (0, winston_1.createLogger)({
            transports: [new winston_1.transports.Console()],
        });
    }
    error(ctx, message, meta) {
        const timestamp = new Date().toISOString();
        return this.logger.error(Object.assign({ message, contextName: this.context, ctx,
            timestamp }, meta));
    }
    warn(ctx, message, meta) {
        const timestamp = new Date().toISOString();
        return this.logger.warn(Object.assign({ message, contextName: this.context, ctx,
            timestamp }, meta));
    }
    debug(ctx, message, meta) {
        const timestamp = new Date().toISOString();
        return this.logger.debug(Object.assign({ message, contextName: this.context, ctx,
            timestamp }, meta));
    }
    verbose(ctx, message, meta) {
        const timestamp = new Date().toISOString();
        return this.logger.verbose(Object.assign({ message, contextName: this.context, ctx,
            timestamp }, meta));
    }
    log(ctx, message, meta) {
        const timestamp = new Date().toISOString();
        return this.logger.info(Object.assign({ message, contextName: this.context, ctx,
            timestamp }, meta));
    }
};
AppLogger = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.TRANSIENT }),
    __metadata("design:paramtypes", [])
], AppLogger);
exports.AppLogger = AppLogger;
//# sourceMappingURL=logger.service.js.map