"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const all_exceptions_filter_1 = require("./filters/all-exceptions.filter");
const config_1 = require("@nestjs/config");
const module_options_1 = require("./configs/module-options");
const logger_module_1 = require("./logger/logger.module");
const get_store_middleware_1 = require("./current-store/get-store.middleware");
const store_module_1 = require("../store/store.module");
let SharedModule = class SharedModule {
    configure(consumer) {
        consumer
            .apply(get_store_middleware_1.GetStoreMiddleware)
            .exclude('seller/(.*)')
            .forRoutes('/:storeId/*');
    }
};
SharedModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot(module_options_1.configModuleOptions),
            logger_module_1.AppLoggerModule,
            store_module_1.StoreModule,
        ],
        providers: [
            {
                provide: core_1.APP_FILTER,
                useClass: all_exceptions_filter_1.AllExceptionsFilter,
            },
        ],
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=shared.module.js.map