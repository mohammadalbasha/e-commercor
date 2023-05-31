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
exports.RtSellerStrategy = void 0;
const passport_1 = require("@nestjs/passport");
const passport_jwt_1 = require("passport-jwt");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
let RtSellerStrategy = class RtSellerStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt-refresh-seller') {
    constructor(config) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: config.get('refreshTokenSeller').secret,
            passReqToCallback: true,
        });
    }
    validate(req, payload) {
        var _a;
        const refreshToken = (_a = req === null || req === void 0 ? void 0 : req.get('authorization')) === null || _a === void 0 ? void 0 : _a.replace('Bearer', '').trim();
        if (!refreshToken)
            throw new common_1.ForbiddenException('Refresh token malformed');
        return Object.assign(Object.assign({}, payload), { refreshToken });
    }
};
RtSellerStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], RtSellerStrategy);
exports.RtSellerStrategy = RtSellerStrategy;
//# sourceMappingURL=rt.strategy.js.map