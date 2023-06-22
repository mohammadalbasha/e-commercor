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
exports.GetStoreMiddleware = void 0;
const common_1 = require("@nestjs/common");
const store_service_1 = require("../../store/services/store.service");
let GetStoreMiddleware = class GetStoreMiddleware {
    constructor(storeService) {
        this.storeService = storeService;
    }
    async use(req, res, next) {
        const storeId = req.params.storeId;
        const store = await this.storeService.findById(storeId);
        if (!store)
            throw new common_1.NotFoundException('store not found');
        if (!store.isActive ||
            !store.isVerifiedAsMarket ||
            store.paypalMerchantId == 'f' ||
            !store.isAccepted)
            throw new common_1.BadRequestException('store inactive');
        req.store = store;
        next();
    }
};
GetStoreMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [store_service_1.StoreService])
], GetStoreMiddleware);
exports.GetStoreMiddleware = GetStoreMiddleware;
//# sourceMappingURL=get-store.middleware.js.map