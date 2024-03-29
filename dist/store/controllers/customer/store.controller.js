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
exports.StoreCustomerController = void 0;
const common_1 = require("@nestjs/common");
const store_service_1 = require("../../services/store.service");
const mongooseClassSerializer_interceptor_1 = require("../../../shared/mongoose/interceptors/mongooseClassSerializer.interceptor");
const store_model_1 = require("../../models/store.model");
let StoreCustomerController = class StoreCustomerController {
    constructor(storeService) {
        this.storeService = storeService;
    }
    getStore(storeName) {
        return this.storeService.findByName(storeName);
    }
    getStoreById(storeId) {
        return this.storeService.findById(storeId);
    }
};
__decorate([
    (0, common_1.UseInterceptors)((0, mongooseClassSerializer_interceptor_1.default)(store_model_1.Store)),
    (0, common_1.Get)('/:storeName'),
    __param(0, (0, common_1.Param)('storeName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], StoreCustomerController.prototype, "getStore", null);
__decorate([
    (0, common_1.Get)('/:storeId/store'),
    __param(0, (0, common_1.Param)('storeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], StoreCustomerController.prototype, "getStoreById", null);
StoreCustomerController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [store_service_1.StoreService])
], StoreCustomerController);
exports.StoreCustomerController = StoreCustomerController;
//# sourceMappingURL=store.controller.js.map