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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
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
    getStore(requestQuery) {
        let { page, limit } = requestQuery, filters = __rest(requestQuery, ["page", "limit"]);
        page = page || 1;
        limit = limit || 10;
        return this.storeService.findAll(Object.assign(Object.assign({}, filters), { isAccepted: true }), page, limit);
    }
    getStoreCreationRequests(requestQuery) {
        let { page, limit } = requestQuery, filters = __rest(requestQuery, ["page", "limit"]);
        page = page || 1;
        limit = limit || 10;
        return this.storeService.findAll({ isAccepted: false }, page, limit);
    }
    getStoreMarketRequests(requestQuery) {
        let { page, limit } = requestQuery, filters = __rest(requestQuery, ["page", "limit"]);
        page = page || 1;
        limit = limit || 10;
        return this.storeService.findAll({ isVerifiedAsMarket: false }, page, limit);
    }
    async getUnReadCounts() {
        return this.storeService.findUnReadStores();
    }
    async getById(storeId) {
        return this.storeService.findByIdAndUpdate(storeId, { isRead: true });
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
        return this.storeService.findByIdAndUpdate(data.storeId, {
            isActive: false,
        });
    }
};
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StoreAdminController.prototype, "getStore", null);
__decorate([
    (0, common_1.Get)('/creation-requests'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StoreAdminController.prototype, "getStoreCreationRequests", null);
__decorate([
    (0, common_1.Get)('/market-requests'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StoreAdminController.prototype, "getStoreMarketRequests", null);
__decorate([
    (0, common_1.UseInterceptors)((0, mongooseClassSerializer_interceptor_1.default)(store_model_1.Store)),
    (0, common_1.Get)('/unread'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], StoreAdminController.prototype, "getUnReadCounts", null);
__decorate([
    (0, common_1.UseInterceptors)((0, mongooseClassSerializer_interceptor_1.default)(store_model_1.Store)),
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], StoreAdminController.prototype, "getById", null);
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