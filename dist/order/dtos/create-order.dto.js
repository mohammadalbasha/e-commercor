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
exports.CreateOrderDto = void 0;
const class_validator_1 = require("class-validator");
const signup_dto_1 = require("../../customer/dtos/signup.dto");
const customer_model_1 = require("../../customer/models/customer.model");
const product_model_1 = require("../../product/models/product.model");
const isRef_old_validator_1 = require("../../shared/validation/isRef-old.validator");
const store_model_1 = require("../../store/models/store.model");
class CreateOrderDto {
}
__decorate([
    (0, class_validator_1.Validate)(isRef_old_validator_1.IsRef, [product_model_1.Product]),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "productId", void 0);
__decorate([
    (0, class_validator_1.Validate)(isRef_old_validator_1.IsRef, [customer_model_1.Customer]),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "customerId", void 0);
__decorate([
    (0, class_validator_1.Validate)(isRef_old_validator_1.IsRef, [store_model_1.Store]),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "storeId", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", signup_dto_1.AddressDto)
], CreateOrderDto.prototype, "recieverAddress", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "recieverFirstName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "recieverLastName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "recieverEmail", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", String)
], CreateOrderDto.prototype, "recieverPhoneNumber", void 0);
exports.CreateOrderDto = CreateOrderDto;
//# sourceMappingURL=create-order.dto.js.map