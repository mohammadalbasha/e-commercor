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
exports.CategoryCustomerController = void 0;
const common_1 = require("@nestjs/common");
const category_service_1 = require("../../services/category.service");
const current_store_decorator_1 = require("../../../shared/current-store/current-store.decorator");
const store_model_1 = require("../../../store/models/store.model");
let CategoryCustomerController = class CategoryCustomerController {
    constructor(categoryService) {
        this.categoryService = categoryService;
    }
    list(store) {
        return this.categoryService.findByStoreId(store.id);
    }
    listOne(categoryId) {
        return this.categoryService.findById(categoryId);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_store_decorator_1.GetCurrentStore)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [store_model_1.Store]),
    __metadata("design:returntype", void 0)
], CategoryCustomerController.prototype, "list", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CategoryCustomerController.prototype, "listOne", null);
CategoryCustomerController = __decorate([
    (0, common_1.Controller)('/:storeId/categories'),
    __metadata("design:paramtypes", [category_service_1.CategoryService])
], CategoryCustomerController);
exports.CategoryCustomerController = CategoryCustomerController;
//# sourceMappingURL=category.controller.js.map