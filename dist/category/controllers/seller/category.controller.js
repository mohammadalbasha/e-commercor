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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategorySellerController = void 0;
const common_1 = require("@nestjs/common");
const get_seller_store_id_decorator_1 = require("../../../authentication/decorators/get-seller-store-id.decorator");
const guards_1 = require("../../../authentication/sellers/guards");
const create_category_dto_1 = require("../../dtos/create-category.dto");
const category_service_1 = require("../../services/category.service");
let CategorySellerController = class CategorySellerController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    async create(data, storeId) {
        const category = await this.categoryService.create(Object.assign(Object.assign({}, data), { storeId }));
        return 'category created successfully';
    }
    list(storeId) {
        return this.categoryService.findByStoreId(storeId);
    }
    listOne(categoryId) {
        return this.categoryService.findById(categoryId);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_seller_store_id_decorator_1.GetSellerStoreId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_category_dto_1.CreateCategoryDto, String]),
    __metadata("design:returntype", Promise)
], CategorySellerController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, get_seller_store_id_decorator_1.GetSellerStoreId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CategorySellerController.prototype, "list", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CategorySellerController.prototype, "listOne", null);
CategorySellerController = __decorate([
    (0, common_1.UseGuards)(guards_1.AtSellerGuard),
    (0, common_1.Controller)('/seller/categories'),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategorySellerController);
exports.CategorySellerController = CategorySellerController;
//# sourceMappingURL=category.controller.js.map