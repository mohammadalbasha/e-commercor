"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticationModule = void 0;
const common_1 = require("@nestjs/common");
const password_service_1 = require("./password.service");
const auth_seller_controller_1 = require("./sellers/controllers/auth-seller.controller");
const auth_seller_service_1 = require("./sellers/services/auth-seller.service");
const strategies_1 = require("./sellers/strategies");
const jwt_1 = require("@nestjs/jwt");
const store_module_1 = require("../store/store.module");
const auth_customer_controller_1 = require("./customers/controllers/auth-customer.controller");
const auth_customer_service_1 = require("./customers/services/auth-customer.service");
const customer_module_1 = require("../customer/customer.module");
const strategies_2 = require("./customers/strategies");
const strategies_3 = require("./customers copy/strategies");
const auth_admin_controller_1 = require("./customers copy/controllers/auth-admin.controller");
const shared_module_1 = require("../shared/shared.module");
const auth_admin_service_1 = require("./customers copy/services/auth-admin.service");
let AuthenticationModule = class AuthenticationModule {
};
AuthenticationModule = __decorate([
    (0, common_1.Module)({
        providers: [
            password_service_1.PasswordService,
            auth_seller_service_1.AuthSellerService,
            strategies_1.AtSellerStrategy,
            strategies_1.RtSellerStrategy,
            strategies_2.AtCustomerStrategy,
            strategies_2.RtCustomerStrategy,
            jwt_1.JwtService,
            auth_customer_service_1.AuthCustomerService,
            strategies_3.AtAdminStrategy,
            strategies_3.RtAdminStrategy,
            auth_admin_service_1.AuthAdminService,
        ],
        exports: [password_service_1.PasswordService, auth_seller_service_1.AuthSellerService],
        imports: [
            (0, common_1.forwardRef)(() => shared_module_1.SharedModule),
            (0, common_1.forwardRef)(() => store_module_1.StoreModule),
            (0, common_1.forwardRef)(() => customer_module_1.CustomerModule),
        ],
        controllers: [
            auth_admin_controller_1.AuthAdminController,
            auth_seller_controller_1.AuthSellerController,
            auth_customer_controller_1.AuthCustomerController,
        ],
    })
], AuthenticationModule);
exports.AuthenticationModule = AuthenticationModule;
//# sourceMappingURL=authentication.module.js.map