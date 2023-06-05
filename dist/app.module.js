"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const shared_module_1 = require("./shared/shared.module");
const utils_module_1 = require("./utils/utils.module");
const store_module_1 = require("./store/store.module");
const authentication_module_1 = require("./authentication/authentication.module");
const customer_module_1 = require("./customer/customer.module");
const product_module_1 = require("./product/product.module");
const category_module_1 = require("./category/category.module");
const order_module_1 = require("./order/order.module");
const uniqueMulti_validator_1 = require("./shared/validation/uniqueMulti.validator");
const unique_validator_1 = require("./shared/validation/unique.validator");
const isRef_validator_1 = require("./shared/validation/isRef.validator");
const file_module_1 = require("./file/file.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            shared_module_1.SharedModule,
            utils_module_1.UtilsModule,
            store_module_1.StoreModule,
            authentication_module_1.AuthenticationModule,
            customer_module_1.CustomerModule,
            product_module_1.ProductModule,
            category_module_1.CategoryModule,
            order_module_1.OrderModule,
            file_module_1.MediaFileModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [
            app_service_1.AppService,
            unique_validator_1.Unique,
            uniqueMulti_validator_1.UniqueMulti,
            isRef_validator_1.IsRef,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map