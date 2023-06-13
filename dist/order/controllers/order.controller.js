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
exports.OrderController = void 0;
const common_1 = require("@nestjs/common");
const order_service_1 = require("../services/order.service");
const current_store_decorator_1 = require("../../shared/current-store/current-store.decorator");
const store_model_1 = require("../../store/models/store.model");
const decorators_1 = require("../../authentication/decorators");
const guards_1 = require("../../authentication/customers/guards");
let OrderController = class OrderController {
    constructor(orderService) {
        this.orderService = orderService;
    }
    creataOrder(data, store, user) {
        data = Object.assign(Object.assign({}, data), { storeId: store.id, customerId: user.sub });
        return this.orderService.purchaseProduct(data, store);
    }
    captureOrder(storeId, orderId, token) {
        return this.orderService.captureOrder(storeId, orderId, token);
    }
    cancelOrder(storeId, orderId, token) {
        return this.orderService.cancelOrder(storeId, orderId);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, current_store_decorator_1.GetCurrentStore)()),
    __param(2, (0, decorators_1.GetCurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, store_model_1.Store, Object]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "creataOrder", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)('/captue/:orderId'),
    __param(0, (0, common_1.Param)('storeId')),
    __param(1, (0, common_1.Param)('orderId')),
    __param(2, (0, common_1.Query)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "captureOrder", null);
__decorate([
    (0, decorators_1.Public)(),
    (0, common_1.Get)('/captue/cancel/:orderId'),
    __param(0, (0, common_1.Param)('storeId')),
    __param(1, (0, common_1.Param)('orderId')),
    __param(2, (0, common_1.Query)('token')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String]),
    __metadata("design:returntype", void 0)
], OrderController.prototype, "cancelOrder", null);
OrderController = __decorate([
    (0, common_1.UseGuards)(guards_1.AtCustomerGuard),
    (0, common_1.Controller)(':storeId/order'),
    __metadata("design:paramtypes", [order_service_1.OrderService])
], OrderController);
exports.OrderController = OrderController;
//# sourceMappingURL=order.controller.js.map