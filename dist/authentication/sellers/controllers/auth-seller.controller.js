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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthSellerController = void 0;
const common_1 = require("@nestjs/common");
const auth_seller_service_1 = require("../services/auth-seller.service");
const login_dto_1 = require("../../dtos/login.dto");
const decorators_1 = require("../../decorators");
const guards_1 = require("../guards");
let AuthSellerController = class AuthSellerController {
    constructor(authSellerService) {
        this.authSellerService = authSellerService;
    }
    signinLocal(data) {
        return this.authSellerService.login(data);
    }
    logout(sellerId) {
        return this.authSellerService.logout(sellerId);
    }
    refreshTokens(sellerId, refreshToken) {
        return this.authSellerService.refreshTokens(sellerId, refreshToken);
    }
};
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthSellerController.prototype, "signinLocal", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, decorators_1.GetCurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthSellerController.prototype, "logout", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.RtSellerGuard),
    (0, common_1.Post)('refresh'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, decorators_1.GetCurrentUserId)()),
    __param(1, (0, decorators_1.GetCurrentUser)('refreshToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], AuthSellerController.prototype, "refreshTokens", null);
AuthSellerController = __decorate([
    (0, common_1.Controller)('seller/auth'),
    __metadata("design:paramtypes", [auth_seller_service_1.AuthSellerService])
], AuthSellerController);
exports.AuthSellerController = AuthSellerController;
//# sourceMappingURL=auth-seller.controller.js.map