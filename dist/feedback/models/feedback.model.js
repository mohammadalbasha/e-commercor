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
exports.FeedbackSchema = exports.Feedback = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const customer_model_1 = require("../../customer/models/customer.model");
const product_model_1 = require("../../product/models/product.model");
const constants_1 = require("../../shared/constants");
const base_model_1 = require("../../shared/models/base.model");
const PropRef_decorator_1 = require("../../shared/models/decorators/mongoose/PropRef.decorator");
const base_schema_1 = require("../../shared/mongoose/base.schema");
let Feedback = class Feedback extends base_model_1.BaseModel {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Feedback.prototype, "text", void 0);
__decorate([
    (0, PropRef_decorator_1.PropRef)(product_model_1.Product),
    __metadata("design:type", String)
], Feedback.prototype, "productId", void 0);
__decorate([
    (0, PropRef_decorator_1.PropObject)(product_model_1.Product),
    __metadata("design:type", product_model_1.Product)
], Feedback.prototype, "product", void 0);
__decorate([
    (0, PropRef_decorator_1.PropRef)(customer_model_1.Customer),
    __metadata("design:type", String)
], Feedback.prototype, "customerId", void 0);
__decorate([
    (0, PropRef_decorator_1.PropObject)(customer_model_1.Customer),
    __metadata("design:type", customer_model_1.Customer)
], Feedback.prototype, "customer", void 0);
Feedback = __decorate([
    (0, mongoose_1.Schema)(constants_1.defaultSchemaOptions)
], Feedback);
exports.Feedback = Feedback;
exports.FeedbackSchema = (0, base_schema_1.BaseSchema)(Feedback);
//# sourceMappingURL=feedback.model.js.map