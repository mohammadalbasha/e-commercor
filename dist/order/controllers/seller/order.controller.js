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
exports.OrderSellerController = void 0;
const common_1 = require("@nestjs/common");
const order_service_1 = require("../../services/order.service");
const guards_1 = require("../../../authentication/sellers/guards");
const get_seller_store_id_decorator_1 = require("../../../authentication/decorators/get-seller-store-id.decorator");
let OrderSellerController = class OrderSellerController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    list(storeId) {
        return this.orderService.listOrdersByStore(storeId);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, get_seller_store_id_decorator_1.GetSellerStoreId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], OrderSellerController.prototype, "list", null);
OrderSellerController = __decorate([
    (0, common_1.UseGuards)(guards_1.AtSellerGuard),
    (0, common_1.Controller)('seller/order'),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderSellerController);
exports.OrderSellerController = OrderSellerController;
//# sourceMappingURL=order.controller.js.map