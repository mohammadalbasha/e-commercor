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
exports.AuthCustomerService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const password_service_1 = require("../../password.service");
const jwt_1 = require("@nestjs/jwt");
const customer_service_1 = require("../../../customer/services/customer.service");
let AuthCustomerService = class AuthCustomerService {
    constructor(jwtService, config, customerService, passwordService) {
        this.jwtService = jwtService;
        this.config = config;
        this.customerService = customerService;
        this.passwordService = passwordService;
    }
    async login(data, storeId) {
        const customer = await this.customerService.findByEmailAndStoreId(data.email, storeId);
        if (!customer)
            throw new common_1.NotFoundException('Customer with email not found');
        const passwordMatches = await this.passwordService.validatePassword(data.password, customer.password);
        if (!passwordMatches)
            throw new common_1.ForbiddenException('passwrod incorrect');
        const tokens = await this.getTokens(customer.id, customer.email, storeId);
        return tokens;
    }
    async refreshTokens(customerId, rt) {
        const customer = await this.customerService.findById(customerId);
        const tokens = await this.getTokens(customer.id, customer.email, customer.id);
        return tokens;
    }
    async getTokens(customerId, email, storeId) {
        const jwtPayload = {
            sub: customerId,
            email: email,
            storeId: storeId,
        };
        const [at, rt] = await Promise.all([
            this.jwtService.signAsync(jwtPayload, {
                secret: this.config.get('accessTokenCustomer')
                    .secret,
                expiresIn: this.config.get('accessTokenCustomer')
                    .expiresIn,
            }),
            this.jwtService.signAsync(jwtPayload, {
                secret: this.config.get('refreshTokenCustomer')
                    .secret,
                expiresIn: this.config.get('refreshTokenCustomer')
                    .expiresIn,
            }),
        ]);
        return {
            access_token: at,
            refresh_token: rt,
        };
    }
};
AuthCustomerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        config_1.ConfigService,
        customer_service_1.CustomerService,
        password_service_1.PasswordService])
], AuthCustomerService);
exports.AuthCustomerService = AuthCustomerService;
//# sourceMappingURL=auth-customer.service.js.map