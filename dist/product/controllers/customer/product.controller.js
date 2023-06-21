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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductCustomerController = void 0;
const common_1 = require("@nestjs/common");
const category_service_1 = require("../../../category/services/category.service");
const product_service_1 = require("../../services/product.service");
const current_store_decorator_1 = require("../../../shared/current-store/current-store.decorator");
const store_model_1 = require("../../../store/models/store.model");
let ProductCustomerController = class ProductCustomerController {
    constructor(productService, categoryService) {
        this.productService = productService;
        this.categoryService = categoryService;
    }
    async listAll(categoryId, requestQuery, store) {
        const category = await this.categoryService.findById(categoryId);
        if (category.storeId != store.id) {
            throw new common_1.UnauthorizedException("you don't have access to this category");
        }
        let { page, limit } = requestQuery, filters = __rest(requestQuery, ["page", "limit"]);
        page = page || 1;
        limit = limit || 10;
        return this.productService.find(categoryId, filters, page, limit);
    }
    async listByStoreId(storeId) {
        return this.productService.findByStoreId(storeId);
    }
    async listOne(productId, store) {
        const product = await this.productService.findByIdWithStyle(productId);
        if (product.storeId != store.id) {
            throw new common_1.UnauthorizedException("you don't have access to this product");
        }
        return product;
    }
};
__decorate([
    (0, common_1.Get)('/:categoryId/products'),
    __param(0, (0, common_1.Param)('categoryId')),
    __param(1, (0, common_1.Query)()),
    __param(2, (0, current_store_decorator_1.GetCurrentStore)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, store_model_1.Store]),
    __metadata("design:returntype", Promise)
], ProductCustomerController.prototype, "listAll", null);
__decorate([
    (0, common_1.Get)('products'),
    __param(0, (0, common_1.Param)('storeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductCustomerController.prototype, "listByStoreId", null);
__decorate([
    (0, common_1.Get)('/:categoryId/products/:productId'),
    __param(0, (0, common_1.Param)('productId')),
    __param(1, (0, current_store_decorator_1.GetCurrentStore)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, store_model_1.Store]),
    __metadata("design:returntype", Promise)
], ProductCustomerController.prototype, "listOne", null);
ProductCustomerController = __decorate([
    (0, common_1.Controller)('/:storeId'),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        category_service_1.CategoryService])
], ProductCustomerController);
exports.ProductCustomerController = ProductCustomerController;
//# sourceMappingURL=product.controller.js.map