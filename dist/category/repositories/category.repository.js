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
exports.CategoryRepository = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const category_model_1 = require("../models/category.model");
let CategoryRepository = class CategoryRepository {
    constructor(category) {
        this.category = category;
    }
    async create(data) {
        const category = await this.category.create(data);
        return category;
    }
    async findById(categoryId) {
        const category = await this.category.findById(categoryId);
        return category;
    }
    async findByStoreId(storeId) {
        const categories = await this.category.find({
            storeId: storeId,
        });
        return categories;
    }
    async findAll(filter) {
        return this.category.find(Object.assign({}, filter));
    }
    findOne(filter) {
        return this.category.findOne(Object.assign({}, filter));
    }
};
CategoryRepository = __decorate([
    __param(0, (0, mongoose_2.InjectModel)(category_model_1.Category.name)),
    __metadata("design:paramtypes", [mongoose_1.default.Model])
], CategoryRepository);
exports.CategoryRepository = CategoryRepository;
//# sourceMappingURL=category.repository.js.map