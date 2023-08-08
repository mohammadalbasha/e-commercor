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
exports.ProductService = void 0;
const common_1 = require("@nestjs/common");
const product_repository_1 = require("../repositories/product.repository");
const category_service_1 = require("../../category/services/category.service");
const filter_helper_1 = require("../../shared/mongoose/helperFunctions/filter.helper");
let ProductService = class ProductService {
    constructor(productRepo, categroyService) {
        this.productRepo = productRepo;
        this.categroyService = categroyService;
    }
    validateProductData(productProperties, data) {
        const { storeId, categoryId } = data, productData = __rest(data, ["storeId", "categoryId"]);
        const productPropertiesKeys = Object.keys(productProperties._doc);
        const productDataKeys = Object.keys(productData);
        for (let key of productDataKeys) {
            if (key == 'tag' || key == 'tags')
                continue;
            if (!productPropertiesKeys.includes(key)) {
                throw new common_1.BadRequestException(`${key} is invalid property for this product`);
            }
        }
    }
    convertFilters(filters) {
        const output = {};
        for (const key in filters) {
            let [type, name] = key.split(/(?=[A-Z])/);
            if (type != 'min' && type != 'max') {
                output[key] = filters[key];
                continue;
            }
            name = name.toLowerCase();
            const value = filters[key];
            if (!output[name]) {
                output[name] = {};
            }
            output[name][type] = value;
        }
        return output;
    }
    async create(data) {
        const categoryId = data.categoryId;
        const category = await this.categroyService.findById(categoryId);
        if (category.storeId != data.storeId) {
            throw new common_1.UnauthorizedException("you don't have access to this category");
        }
        this.validateProductData(category.productProperties, data);
        if (data['tag'] && !data['tags']) {
            data['tags'] = data['tag'];
        }
        data['tags'] = data['tags'].trim().split(' ');
        return this.productRepo.create(data);
    }
    async increamentCount(filter, session) {
        return this.productRepo.inceramentCount(filter, session);
    }
    async decreamentCount(filter, session) {
        return this.productRepo.decreamentCount(filter, session);
    }
    async findById(productId, session) {
        return this.productRepo.findById(productId, session);
    }
    async findByIdWithStyle(productId) {
        let product = await this.productRepo.findById(productId);
        const category = await this.categroyService.findById(product.categoryId);
        product = product['_doc'];
        return Object.assign(Object.assign({}, product), { categoryName: category.name, cardProperties: category === null || category === void 0 ? void 0 : category.cardProperties, productProperties: category === null || category === void 0 ? void 0 : category.productProperties });
    }
    async find(categoryId, filters, page, limit) {
        const category = await this.categroyService.findById(categoryId);
        if (filters) {
            filters = this.convertFilters(filters);
            filters = (0, filter_helper_1.filterToMongo)(filters);
        }
        let products = await this.productRepo.find(categoryId, filters || {}, page, limit);
        products.items = products.items.map((item) => {
            return Object.assign(Object.assign({}, item['_doc']), { categoryName: category.name });
        });
        return products;
    }
    async findByStoreId(storeId) {
        return this.productRepo.findByStoreId(storeId);
    }
    async findByIdAndUpdate(productId, data) {
        const product = await this.productRepo.findById(productId);
        if (!product)
            throw new common_1.NotFoundException('product not found');
        return this.productRepo.findByIdAndUpdate(productId, data);
    }
    async findByIdAndDelete(productId) {
        const product = await this.productRepo.findById(productId);
        if (!product)
            throw new common_1.NotFoundException('product not found');
        return this.productRepo.findByIdAndDelete(productId);
    }
    findSimilarProducts(productId) {
        return this.productRepo.findSimilarProducts(productId);
    }
};
ProductService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [product_repository_1.ProductRepository,
        category_service_1.CategoryService])
], ProductService);
exports.ProductService = ProductService;
//# sourceMappingURL=product.service.js.map