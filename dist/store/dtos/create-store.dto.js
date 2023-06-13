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
exports.CreateStoreDto = exports.CreateSellerDto = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const matchPassword_decorator_1 = require("../../authentication/decorators/validation/matchPassword.decorator");
const unique_validator_1 = require("../../shared/validation/unique.validator");
const store_model_1 = require("../models/store.model");
class CreateSellerDto {
}
__decorate([
    (0, class_validator_1.Validate)(unique_validator_1.Unique, [store_model_1.Store, 'seller.name']),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", String)
], CreateSellerDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.Validate)(unique_validator_1.Unique, [store_model_1.Store, 'seller.email']),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", String)
], CreateSellerDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.MinLength)(8),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", String)
], CreateSellerDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.Validate)(matchPassword_decorator_1.MatchPassword),
    __metadata("design:type", String)
], CreateSellerDto.prototype, "confirmPassword", void 0);
__decorate([
    (0, class_validator_1.Validate)(unique_validator_1.Unique, [store_model_1.Store, 'seller.phoneNumber']),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", String)
], CreateSellerDto.prototype, "phoneNumber", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateSellerDto.prototype, "ssn", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateSellerDto.prototype, "nationality", void 0);
exports.CreateSellerDto = CreateSellerDto;
class CreateStoreDto {
}
__decorate([
    (0, class_validator_1.Validate)(unique_validator_1.Unique, [store_model_1.Store, 'name']),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsDefined)(),
    __metadata("design:type", String)
], CreateStoreDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => CreateSellerDto),
    __metadata("design:type", CreateSellerDto)
], CreateStoreDto.prototype, "seller", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStoreDto.prototype, "businessType", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStoreDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], CreateStoreDto.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateStoreDto.prototype, "isMarket", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateStoreDto.prototype, "marketAddress", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateStoreDto.prototype, "marketName", void 0);
exports.CreateStoreDto = CreateStoreDto;
//# sourceMappingURL=create-store.dto.js.map