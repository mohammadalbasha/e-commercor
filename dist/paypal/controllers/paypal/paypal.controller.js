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
exports.PaypalController = void 0;
const common_1 = require("@nestjs/common");
const get_seller_store_id_decorator_1 = require("../../../authentication/decorators/get-seller-store-id.decorator");
const guards_1 = require("../../../authentication/sellers/guards");
const paypal_service_1 = require("../../services/paypal.service");
let PaypalController = class PaypalController {
    constructor(paypalService) {
        this.paypalService = paypalService;
    }
    setupMerchant(storeId) {
        return this.paypalService.setupMerchant(storeId);
    }
    setupMerchantSuccessCallback(query) {
        const { merchantId: storeId, merchantIdInPayPal } = query;
        return this.paypalService.setMerchantId(storeId, merchantIdInPayPal);
    }
};
__decorate([
    (0, common_1.UseGuards)(guards_1.AtSellerGuard),
    (0, common_1.Get)('setup-merchant'),
    __param(0, (0, get_seller_store_id_decorator_1.GetSellerStoreId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaypalController.prototype, "setupMerchant", null);
__decorate([
    (0, common_1.Get)('setup-merchant-success-callback'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PaypalController.prototype, "setupMerchantSuccessCallback", null);
PaypalController = __decorate([
    (0, common_1.Controller)('seller/paypal'),
    __metadata("design:paramtypes", [paypal_service_1.PaypalService])
], PaypalController);
exports.PaypalController = PaypalController;
//# sourceMappingURL=paypal.controller.js.map