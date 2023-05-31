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
exports.OrderSchema = exports.Order = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const customer_model_1 = require("../../customer/models/customer.model");
const product_model_1 = require("../../product/models/product.model");
const common_1 = require("../../shared/constants/common");
const base_model_1 = require("../../shared/models/base.model");
const PropRef_decorator_1 = require("../../shared/models/decorators/mongoose/PropRef.decorator");
const store_model_1 = require("../../store/models/store.model");
let Order = class Order extends base_model_1.BaseModel {
};
__decorate([
    (0, mongoose_1.Prop)({ index: true, required: true }),
    __metadata("design:type", String)
], Order.prototype, "recieverFirstName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ index: true, required: true }),
    __metadata("design:type", String)
], Order.prototype, "recieverLastName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, index: true }),
    __metadata("design:type", String)
], Order.prototype, "recieverEmail", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, index: true }),
    __metadata("design:type", String)
], Order.prototype, "recieverPhoneNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: customer_model_1.Address, required: true }),
    __metadata("design:type", customer_model_1.Address)
], Order.prototype, "recieverAddress", void 0);
__decorate([
    (0, PropRef_decorator_1.PropRef)(store_model_1.Store),
    __metadata("design:type", String)
], Order.prototype, "storeId", void 0);
__decorate([
    (0, PropRef_decorator_1.PropObject)(store_model_1.Store),
    __metadata("design:type", store_model_1.Store)
], Order.prototype, "store", void 0);
__decorate([
    (0, PropRef_decorator_1.PropRef)(product_model_1.Product),
    __metadata("design:type", String)
], Order.prototype, "productId", void 0);
__decorate([
    (0, PropRef_decorator_1.PropObject)(product_model_1.Product),
    __metadata("design:type", product_model_1.Product)
], Order.prototype, "product", void 0);
__decorate([
    (0, PropRef_decorator_1.PropRef)(customer_model_1.Customer),
    __metadata("design:type", String)
], Order.prototype, "customerId", void 0);
__decorate([
    (0, PropRef_decorator_1.PropObject)(customer_model_1.Customer),
    __metadata("design:type", customer_model_1.Customer)
], Order.prototype, "customer", void 0);
Order = __decorate([
    (0, mongoose_1.Schema)(common_1.defaultSchemaOptions)
], Order);
exports.Order = Order;
exports.OrderSchema = mongoose_1.SchemaFactory.createForClass(Order);
//# sourceMappingURL=order.model.js.map