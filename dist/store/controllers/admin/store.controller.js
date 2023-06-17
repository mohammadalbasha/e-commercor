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
exports.StoreAdminController = void 0;
const common_1 = require("@nestjs/common");
const store_service_1 = require("../../services/store.service");
const mongooseClassSerializer_interceptor_1 = require("../../../shared/mongoose/interceptors/mongooseClassSerializer.interceptor");
const store_model_1 = require("../../models/store.model");
const active_store_dto_1 = require("../../dtos/active-store-dto");
const guards_1 = require("../../../authentication/customers copy/guards");
let StoreAdminController = class StoreAdminController {
    constructor(storeService) {
        this.storeService = storeService;
    }
    getStore() {
        return this.storeService.findAll({});
    }
    getStoreCreationRequests() {
        return this.storeService.findAll({ isAccepted: false });
    }
    getStoreMarketRequests() {
        return this.storeService.findAll({ isVerifiedAsMarket: false });
    }
    async acceptCreation(data) {
        return this.storeService.findByIdAndUpdate(data.storeId, {
            isAccepted: true,
        });
    }
    async acceptMarket(data) {
        return this.storeService.findByIdAndUpdate(data.storeId, {
            isVerifiedAsMarket: true,
        });
    }
    async activate(data) {
        return this.storeService.findByIdAndUpdate(data.storeId, {
            isActive: true,
        });
    }
    async deActivate(data) {
        await this.storeService.findByIdAndUpdate(data.storeId, {
            isActive: false,
        });
    }
};
__decorate([
    (0, common_1.UseInterceptors)((0, mongooseClassSerializer_interceptor_1.default)(store_model_1.Store)),
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StoreAdminController.prototype, "getStore", null);
__decorate([
    (0, common_1.UseInterceptors)((0, mongooseClassSerializer_interceptor_1.default)(store_model_1.Store)),
    (0, common_1.Get)('/creation-requests'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StoreAdminController.prototype, "getStoreCreationRequests", null);
__decorate([
    (0, common_1.UseInterceptors)((0, mongooseClassSerializer_interceptor_1.default)(store_model_1.Store)),
    (0, common_1.Get)('/market-requests'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], StoreAdminController.prototype, "getStoreMarketRequests", null);
__decorate([
    (0, common_1.UseInterceptors)((0, mongooseClassSerializer_interceptor_1.default)(store_model_1.Store)),
    (0, common_1.Put)('accept-creation'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [active_store_dto_1.ActivateStoreDto]),
    __metadata("design:returntype", Promise)
], StoreAdminController.prototype, "acceptCreation", null);
__decorate([
    (0, common_1.UseInterceptors)((0, mongooseClassSerializer_interceptor_1.default)(store_model_1.Store)),
    (0, common_1.Put)('accept-market'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [active_store_dto_1.ActivateStoreDto]),
    __metadata("design:returntype", Promise)
], StoreAdminController.prototype, "acceptMarket", null);
__decorate([
    (0, common_1.UseInterceptors)((0, mongooseClassSerializer_interceptor_1.default)(store_model_1.Store)),
    (0, common_1.Put)('/activate'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [active_store_dto_1.ActivateStoreDto]),
    __metadata("design:returntype", Promise)
], StoreAdminController.prototype, "activate", null);
__decorate([
    (0, common_1.UseInterceptors)((0, mongooseClassSerializer_interceptor_1.default)(store_model_1.Store)),
    (0, common_1.Put)('/deactivate'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [active_store_dto_1.ActivateStoreDto]),
    __metadata("design:returntype", Promise)
], StoreAdminController.prototype, "deActivate", null);
StoreAdminController = __decorate([
    (0, common_1.UseGuards)(guards_1.AtAdminGuard),
    (0, common_1.Controller)('admin/stores'),
    __metadata("design:paramtypes", [store_service_1.StoreService])
], StoreAdminController);
exports.StoreAdminController = StoreAdminController;
//# sourceMappingURL=store.controller.js.map