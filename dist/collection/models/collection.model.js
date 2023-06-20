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
exports.CollectionSchema = exports.Collection = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const product_model_1 = require("../../product/models/product.model");
const constants_1 = require("../../shared/constants");
const base_model_1 = require("../../shared/models/base.model");
const PropRef_decorator_1 = require("../../shared/models/decorators/mongoose/PropRef.decorator");
const store_model_1 = require("../../store/models/store.model");
let Collection = class Collection extends base_model_1.BaseModel {
};
__decorate([
    (0, mongoose_1.Prop)({ index: true, required: true }),
    __metadata("design:type", String)
], Collection.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], Collection.prototype, "description", void 0);
__decorate([
    (0, PropRef_decorator_1.PropRef)(store_model_1.Store),
    __metadata("design:type", String)
], Collection.prototype, "storeId", void 0);
__decorate([
    (0, PropRef_decorator_1.PropObject)(store_model_1.Store),
    __metadata("design:type", store_model_1.Store)
], Collection.prototype, "store", void 0);
__decorate([
    (0, PropRef_decorator_1.PropRef)(product_model_1.Product, true),
    __metadata("design:type", Array)
], Collection.prototype, "productsIds", void 0);
__decorate([
    (0, PropRef_decorator_1.PropObject)(product_model_1.Product, true),
    __metadata("design:type", Array)
], Collection.prototype, "products", void 0);
Collection = __decorate([
    (0, mongoose_1.Schema)(constants_1.defaultSchemaOptions)
], Collection);
exports.Collection = Collection;
exports.CollectionSchema = mongoose_1.SchemaFactory.createForClass(Collection);
//# sourceMappingURL=collection.model.js.map