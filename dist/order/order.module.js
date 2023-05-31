"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrderModule = void 0;
const common_1 = require("@nestjs/common");
const order_controller_1 = require("./controllers/order.controller");
const order_service_1 = require("./services/order.service");
const mongoose_1 = require("@nestjs/mongoose");
const order_model_1 = require("./models/order.model");
const order_repository_1 = require("./repository/order.repository");
const paypal_module_1 = require("../paypal/paypal.module");
const product_module_1 = require("../product/product.module");
let OrderModule = class OrderModule {
};
OrderModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: order_model_1.Order.name, schema: order_model_1.OrderSchema }]),
            paypal_module_1.PaypalModule,
            product_module_1.ProductModule,
        ],
        controllers: [order_controller_1.OrderController],
        providers: [order_service_1.OrderService, order_repository_1.OrderRepository],
    })
], OrderModule);
exports.OrderModule = OrderModule;
//# sourceMappingURL=order.module.js.map