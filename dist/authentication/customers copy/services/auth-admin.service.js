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
exports.AuthAdminService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const jwt_1 = require("@nestjs/jwt");
let AuthAdminService = class AuthAdminService {
    constructor(jwtService, config) {
        this.jwtService = jwtService;
        this.config = config;
    }
    async login(data) {
        const credentials = await this.config.get('adminAuth');
        if (data.username != credentials.username ||
            data.password != credentials.password) {
            throw new common_1.UnauthorizedException('Invalid Credentials');
        }
        const tokens = await this.getTokens(credentials.username);
        return tokens;
    }
    async refreshTokens(rt) {
        const tokens = await this.getTokens(rt.username);
        return tokens;
    }
    async getTokens(username) {
        const jwtPayload = {
            sub: username,
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
AuthAdminService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [jwt_1.JwtService, config_1.ConfigService])
], AuthAdminService);
exports.AuthAdminService = AuthAdminService;
//# sourceMappingURL=auth-admin.service.js.map