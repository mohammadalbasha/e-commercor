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
exports.CategorySchema = exports.Category = exports.ProductProperties = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const common_1 = require("../../shared/constants/common");
const base_model_1 = require("../../shared/models/base.model");
const PropRef_decorator_1 = require("../../shared/models/decorators/mongoose/PropRef.decorator");
const store_model_1 = require("../../store/models/store.model");
let ProductProperties = class ProductProperties {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ProductProperties.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ProductProperties.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], ProductProperties.prototype, "count", void 0);
ProductProperties = __decorate([
    (0, mongoose_1.Schema)(common_1.defaultSchemaOptions)
], ProductProperties);
exports.ProductProperties = ProductProperties;
let Category = class Category extends base_model_1.BaseModel {
};
__decorate([
    (0, mongoose_1.Prop)({ index: true, required: true }),
    __metadata("design:type", String)
], Category.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Category.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false, required: true }),
    __metadata("design:type", Boolean)
], Category.prototype, "isSale", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0, required: true }),
    __metadata("design:type", Number)
], Category.prototype, "saleValue", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Category.prototype, "imagesIds", void 0);
__decorate([
    (0, PropRef_decorator_1.PropRef)(store_model_1.Store),
    __metadata("design:type", String)
], Category.prototype, "storeId", void 0);
__decorate([
    (0, PropRef_decorator_1.PropObject)(store_model_1.Store),
    __metadata("design:type", store_model_1.Store)
], Category.prototype, "store", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: ProductProperties }),
    __metadata("design:type", ProductProperties)
], Category.prototype, "productProperties", void 0);
Category = __decorate([
    (0, mongoose_1.Schema)(common_1.defaultSchemaOptions)
], Category);
exports.Category = Category;
exports.CategorySchema = mongoose_1.SchemaFactory.createForClass(Category);
//# sourceMappingURL=category.model.js.map