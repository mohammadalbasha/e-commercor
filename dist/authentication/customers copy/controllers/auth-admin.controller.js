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
exports.AuthAdminController = void 0;
const common_1 = require("@nestjs/common");
const auth_admin_service_1 = require("../services/auth-admin.service");
const login_dto_1 = require("../../dtos/login.dto");
const decorators_1 = require("../../decorators");
const guards_1 = require("../guards");
let AuthAdminController = class AuthAdminController {
    constructor(authAdminService) {
        this.authAdminService = authAdminService;
    }
    signinLocal(data) {
        return this.authAdminService.login(data);
    }
    refreshTokens(refreshToken) {
        return this.authAdminService.refreshTokens(refreshToken);
    }
};
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginAdminDto]),
    __metadata("design:returntype", Promise)
], AuthAdminController.prototype, "signinLocal", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.RtAdminGuard),
    (0, common_1.Post)('refresh'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, decorators_1.GetCurrentUser)('refreshToken')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AuthAdminController.prototype, "refreshTokens", null);
AuthAdminController = __decorate([
    (0, common_1.Controller)('admin/auth'),
    __metadata("design:paramtypes", [auth_admin_service_1.AuthAdminService])
], AuthAdminController);
exports.AuthAdminController = AuthAdminController;
//# sourceMappingURL=auth-admin.controller.js.map