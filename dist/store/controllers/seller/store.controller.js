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
exports.StoreSellerController = void 0;
const common_1 = require("@nestjs/common");
const create_store_dto_1 = require("../../dtos/create-store.dto");
const store_service_1 = require("../../services/store.service");
const decorators_1 = require("../../../authentication/decorators");
const guards_1 = require("../../../authentication/sellers/guards");
const mongooseClassSerializer_interceptor_1 = require("../../../shared/mongoose/interceptors/mongooseClassSerializer.interceptor");
const store_model_1 = require("../../models/store.model");
const auth_seller_service_1 = require("../../../authentication/sellers/services/auth-seller.service");
const market_store_dto_1 = require("../../dtos/market-store.dto");
let StoreSellerController = class StoreSellerController {
    constructor(storeService, authService) {
        this.storeService = storeService;
        this.authService = authService;
    }
    async create(input) {
        const store = await this.storeService.create(input);
        return this.authService.login({
            email: input.seller.email,
            password: input.seller.password,
        });
    }
    getStore(sellerId) {
        return this.storeService.findBySellerId(sellerId);
    }
    addLandingPage(body, sellerId) {
        return this.storeService.addLandingPage(sellerId, body);
    }
    addMarketInformation(body, sellerId) {
        return this.storeService.addMarketPlace(sellerId, body);
    }
};
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.UseInterceptors)((0, mongooseClassSerializer_interceptor_1.default)(store_model_1.Store)),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_store_dto_1.CreateStoreDto]),
    __metadata("design:returntype", Promise)
], StoreSellerController.prototype, "create", null);
__decorate([
    (0, common_1.UseInterceptors)((0, mongooseClassSerializer_interceptor_1.default)(store_model_1.Store)),
    (0, common_1.Get)(),
    __param(0, (0, decorators_1.GetCurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StoreSellerController.prototype, "getStore", null);
__decorate([
    (0, common_1.Post)('/landing-page'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, decorators_1.GetCurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], StoreSellerController.prototype, "addLandingPage", null);
__decorate([
    (0, common_1.Put)('/market'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, decorators_1.GetCurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [market_store_dto_1.MarketDto, String]),
    __metadata("design:returntype", void 0)
], StoreSellerController.prototype, "addMarketInformation", null);
StoreSellerController = __decorate([
    (0, common_1.UseGuards)(guards_1.AtSellerGuard),
    (0, common_1.Controller)('/seller/store'),
    __metadata("design:paramtypes", [store_service_1.StoreService,
        auth_seller_service_1.AuthSellerService])
], StoreSellerController);
exports.StoreSellerController = StoreSellerController;
//# sourceMappingURL=store.controller.js.map