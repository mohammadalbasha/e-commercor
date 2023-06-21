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
exports.ProductSellerController = void 0;
const common_1 = require("@nestjs/common");
const get_seller_store_id_decorator_1 = require("../../../authentication/decorators/get-seller-store-id.decorator");
const guards_1 = require("../../../authentication/sellers/guards");
const category_service_1 = require("../../../category/services/category.service");
const create_product_dto_1 = require("../../dtos/create-product.dto");
const update_product_dto_1 = require("../../dtos/update-product.dto");
const product_service_1 = require("../../services/product.service");
let ProductSellerController = class ProductSellerController {
    constructor(productService, categoryService) {
        this.productService = productService;
        this.categoryService = categoryService;
    }
    async create(data, storeId) {
        const product = await this.productService.create(Object.assign(Object.assign({}, data), { storeId }));
        return 'product added successfully';
    }
    async listAll(categoryId, requestQuery, storeId) {
        const category = await this.categoryService.findById(categoryId);
        if (category.storeId != storeId) {
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
    async listOne(productId, storeId) {
        const product = await this.productService.findByIdWithStyle(productId);
        if (product.storeId != storeId) {
            throw new common_1.UnauthorizedException("you don't have access to this product");
        }
        return product;
    }
    async updateOne(productId, data, storeId) {
        let product = await this.productService.findById(productId);
        if (product.storeId != storeId) {
            throw new common_1.UnauthorizedException("you don't have access to this product");
        }
        product = await this.productService.findByIdAndUpdate(productId, data);
        return 'product updated successfully';
    }
    async deleteOne(productId, data, storeId) {
        let product = await this.productService.findById(productId);
        if (product.storeId != storeId) {
            throw new common_1.UnauthorizedException("you don't have access to this product");
        }
        await this.productService.findByIdAndDelete(productId);
        return 'product deleted successfully';
    }
};
__decorate([
    (0, common_1.Post)('/:categoryId/products'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_seller_store_id_decorator_1.GetSellerStoreId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_product_dto_1.CreateProductDto, String]),
    __metadata("design:returntype", Promise)
], ProductSellerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/:categoryId/products'),
    __param(0, (0, common_1.Param)('categoryId')),
    __param(1, (0, common_1.Query)()),
    __param(2, (0, get_seller_store_id_decorator_1.GetSellerStoreId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object, String]),
    __metadata("design:returntype", Promise)
], ProductSellerController.prototype, "listAll", null);
__decorate([
    (0, common_1.Get)('products'),
    __param(0, (0, get_seller_store_id_decorator_1.GetSellerStoreId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ProductSellerController.prototype, "listByStoreId", null);
__decorate([
    (0, common_1.Get)('/:categoryId/products/:productId'),
    __param(0, (0, common_1.Param)('productId')),
    __param(1, (0, get_seller_store_id_decorator_1.GetSellerStoreId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ProductSellerController.prototype, "listOne", null);
__decorate([
    (0, common_1.Put)('/:categoryId/products/:productId'),
    __param(0, (0, common_1.Param)('productId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, get_seller_store_id_decorator_1.GetSellerStoreId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_dto_1.UpdateProductDto, String]),
    __metadata("design:returntype", Promise)
], ProductSellerController.prototype, "updateOne", null);
__decorate([
    (0, common_1.Delete)('/:categoryId/products/:productId'),
    __param(0, (0, common_1.Param)('productId')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, get_seller_store_id_decorator_1.GetSellerStoreId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_product_dto_1.UpdateProductDto, String]),
    __metadata("design:returntype", Promise)
], ProductSellerController.prototype, "deleteOne", null);
ProductSellerController = __decorate([
    (0, common_1.UseGuards)(guards_1.AtSellerGuard),
    (0, common_1.Controller)('/seller'),
    __metadata("design:paramtypes", [product_service_1.ProductService,
        category_service_1.CategoryService])
], ProductSellerController);
exports.ProductSellerController = ProductSellerController;
//# sourceMappingURL=product.controller.js.map