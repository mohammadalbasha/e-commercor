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
exports.ProductSchema = exports.Product = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const category_model_1 = require("../../category/models/category.model");
const common_1 = require("../../shared/constants/common");
const base_model_1 = require("../../shared/models/base.model");
const PropRef_decorator_1 = require("../../shared/models/decorators/mongoose/PropRef.decorator");
const store_model_1 = require("../../store/models/store.model");
let Product = class Product extends base_model_1.BaseModel {
};
__decorate([
    (0, mongoose_1.Prop)({ index: true, required: true }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, index: true }),
    __metadata("design:type", Number)
], Product.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, index: true, min: 0 }),
    __metadata("design:type", Number)
], Product.prototype, "count", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Array)
], Product.prototype, "imagesIds", void 0);
__decorate([
    (0, PropRef_decorator_1.PropRef)(store_model_1.Store),
    __metadata("design:type", String)
], Product.prototype, "storeId", void 0);
__decorate([
    (0, PropRef_decorator_1.PropObject)(store_model_1.Store),
    __metadata("design:type", store_model_1.Store)
], Product.prototype, "store", void 0);
__decorate([
    (0, PropRef_decorator_1.PropRef)(category_model_1.Category),
    __metadata("design:type", String)
], Product.prototype, "categoryId", void 0);
__decorate([
    (0, PropRef_decorator_1.PropObject)(category_model_1.Category),
    __metadata("design:type", category_model_1.Category)
], Product.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0, required: true }),
    __metadata("design:type", Number)
], Product.prototype, "version", void 0);
Product = __decorate([
    (0, mongoose_1.Schema)(common_1.defaultSchemaOptions)
], Product);
exports.Product = Product;
exports.ProductSchema = mongoose_1.SchemaFactory.createForClass(Product);
//# sourceMappingURL=product.model.js.map