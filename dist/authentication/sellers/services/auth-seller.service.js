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
exports.AuthSellerService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const password_service_1 = require("../../password.service");
const store_service_1 = require("../../../store/services/store.service");
const argon = require("argon2");
const jwt_1 = require("@nestjs/jwt");
let AuthSellerService = class AuthSellerService {
    constructor(jwtService, config, storeService, passwordService) {
        this.jwtService = jwtService;
        this.config = config;
        this.storeService = storeService;
        this.passwordService = passwordService;
    }
    async login(data) {
        const seller = await this.storeService.findSellerByEmail(data.email);
        if (!seller)
            throw new common_1.ForbiddenException('no seller found with this email');
        const store = await this.storeService.findBySellerId(seller.id);
        const passwordMatches = await this.passwordService.validatePassword(data.password, seller.password);
        if (!passwordMatches)
            throw new common_1.ForbiddenException('password incorrect');
        const tokens = await this.getTokens(seller.id, seller.email, store.id);
        await this.updateRtHash(seller.id, tokens.refresh_token);
        return tokens;
    }
    async logout(sellerId) {
        await this.storeService.findSellerByIdAndUpdate(sellerId, {
            hashedRefreshToken: null,
        });
        return true;
    }
    async refreshTokens(sellerId, rt) {
        const seller = await this.storeService.findSellerById(sellerId);
        const store = await this.storeService.findBySellerId(seller.id);
        if (!seller || !seller.hashedRefreshToken)
            throw new common_1.ForbiddenException('Access Denied');
        const rtMatches = await argon.verify(seller.hashedRefreshToken, rt);
        if (!rtMatches)
            throw new common_1.ForbiddenException('Access Denied');
        const tokens = await this.getTokens(seller.id, seller.email, store.id);
        await this.updateRtHash(seller.id, tokens.refresh_token);
        return tokens;
    }
    async updateRtHash(sellerId, rt) {
        const hashedRefreshToken = await argon.hash(rt);
        await this.storeService.findSellerByIdAndUpdate(sellerId, {
            hashedRefreshToken: hashedRefreshToken,
        });
    }
    async getTokens(sellerId, email, storeId) {
        const jwtPayload = {
            sub: sellerId,
            email: email,
            storeId: storeId,
        };
        const [at, rt] = await Promise.all([
            this.jwtService.signAsync(jwtPayload, {
                secret: this.config.get('accessTokenSeller').secret,
                expiresIn: this.config.get('accessTokenSeller').expiresIn,
            }),
            this.jwtService.signAsync(jwtPayload, {
                secret: this.config.get('refreshTokenSeller').secret,
                expiresIn: this.config.get('refreshTokenSeller').expiresIn,
            }),
        ]);
        return {
            access_token: at,
            refresh_token: rt,
        };
    }
};
AuthSellerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService,
        config_1.ConfigService,
        store_service_1.StoreService,
        password_service_1.PasswordService])
], AuthSellerService);
exports.AuthSellerService = AuthSellerService;
//# sourceMappingURL=auth-seller.service.js.map