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
exports.StoreSchema = exports.Store = exports.Seller = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const class_transformer_1 = require("class-transformer");
const mongoose_2 = require("mongoose");
const common_1 = require("../../shared/constants/common");
const base_model_1 = require("../../shared/models/base.model");
let Seller = class Seller extends base_model_1.BaseModel {
};
__decorate([
    (0, mongoose_1.Prop)({ index: true, required: true }),
    __metadata("design:type", String)
], Seller.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Seller.prototype, "email", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Seller.prototype, "password", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, unique: true }),
    __metadata("design:type", String)
], Seller.prototype, "phoneNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Seller.prototype, "ssn", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Seller.prototype, "nationality", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Seller.prototype, "hashedRefreshToken", void 0);
Seller = __decorate([
    (0, mongoose_1.Schema)(common_1.defaultSchemaOptions)
], Seller);
exports.Seller = Seller;
let Store = class Store extends base_model_1.BaseModel {
};
__decorate([
    (0, mongoose_1.Prop)({ index: true, required: true, unique: true }),
    __metadata("design:type", String)
], Store.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Store.prototype, "paypalMerchantId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false, required: true }),
    __metadata("design:type", Boolean)
], Store.prototype, "isAccepted", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    (0, class_transformer_1.Type)(() => Seller),
    __metadata("design:type", Seller)
], Store.prototype, "seller", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Store.prototype, "businessType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Store.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Store.prototype, "country", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], Store.prototype, "isMarket", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Store.prototype, "marketAddress", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Store.prototype, "marketName", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, default: true }),
    __metadata("design:type", Boolean)
], Store.prototype, "isVerifiedAsMarket", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", mongoose_2.default.Schema.Types.Mixed)
], Store.prototype, "landingPage", void 0);
Store = __decorate([
    (0, mongoose_1.Schema)(common_1.defaultSchemaOptions)
], Store);
exports.Store = Store;
exports.StoreSchema = mongoose_1.SchemaFactory.createForClass(Store);
//# sourceMappingURL=store.model.js.map