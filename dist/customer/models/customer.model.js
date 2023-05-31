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
var Customer_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerSchema = exports.Customer = exports.Address = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const class_validator_1 = require("class-validator");
const common_1 = require("../../shared/constants/common");
const base_model_1 = require("../../shared/models/base.model");
const PropRef_decorator_1 = require("../../shared/models/decorators/mongoose/PropRef.decorator");
const uniqueMulti_validator_1 = require("../../shared/validation/uniqueMulti.validator");
const store_model_1 = require("../../store/models/store.model");
let Address = class Address extends base_model_1.BaseModel {
};
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Address.prototype, "country", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Address.prototype, "city", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Address.prototype, "state", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Address.prototype, "street", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Address.prototype, "fullAddress", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Address.prototype, "buildingNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Address.prototype, "lat", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], Address.prototype, "lan", void 0);
Address = __decorate([
    (0, mongoose_1.Schema)(common_1.defaultSchemaOptions)
], Address);
exports.Address = Address;
let Customer = Customer_1 = class Customer extends base_model_1.BaseModel {
};
__decorate([
    (0, mongoose_1.Prop)({ index: true, required: true }),
    __metadata("design:type", String)
], Customer.prototype, "firstName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ index: true, required: true }),
    __metadata("design:type", String)
], Customer.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.Validate)(uniqueMulti_validator_1.UniqueMulti, [Customer_1, 'email', 'storeId']),
    (0, mongoose_1.Prop)({ required: true, index: true }),
    __metadata("design:type", String)
], Customer.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Customer.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.Validate)(uniqueMulti_validator_1.UniqueMulti, [Customer_1, 'phoneNumber', 'storeId']),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Customer.prototype, "phoneNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Address, required: true }),
    __metadata("design:type", Address)
], Customer.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Customer.prototype, "ssn", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Customer.prototype, "nationality", void 0);
__decorate([
    (0, PropRef_decorator_1.PropRef)(store_model_1.Store),
    __metadata("design:type", String)
], Customer.prototype, "storeId", void 0);
__decorate([
    (0, PropRef_decorator_1.PropObject)(store_model_1.Store),
    __metadata("design:type", store_model_1.Store)
], Customer.prototype, "store", void 0);
Customer = Customer_1 = __decorate([
    (0, mongoose_1.Schema)(common_1.defaultSchemaOptions)
], Customer);
exports.Customer = Customer;
exports.CustomerSchema = mongoose_1.SchemaFactory.createForClass(Customer);
//# sourceMappingURL=customer.model.js.map