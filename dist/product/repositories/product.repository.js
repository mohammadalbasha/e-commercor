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
exports.ProductRepository = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const product_model_1 = require("../models/product.model");
const common_1 = require("@nestjs/common");
let ProductRepository = class ProductRepository {
    constructor(product, connection) {
        this.product = product;
        this.connection = connection;
    }
    async create(data) {
        const product = await this.product.create(data);
        return product;
    }
    async findById(productId, session) {
        const product = session
            ? await this.product.findById(productId).session(session)
            : await this.product.findById(productId);
        return product;
    }
    async decreamentCount(filter, session) {
        const product = await this.product.findOneAndUpdate({
            _id: filter.productId,
            version: filter.version,
        }, { $inc: { count: -1, version: 1 } }, { session: session, new: true });
        return product;
    }
    async inceramentCount(filter, session) {
        return this.product.findOneAndUpdate({
            _id: filter.productId,
            version: filter.version,
        }, { $inc: { count: 1, version: 1 } }, { session: session, new: true });
    }
    async find(categoryId, filters, page, limit) {
        const skip = (+page - 1) * limit;
        filters['categoryId'] = new mongoose_2.default.Types.ObjectId(categoryId);
        const items = await this.product
            .find(filters)
            .skip(skip)
            .limit(limit)
            .exec();
        const count = await this.product.countDocuments(filters).exec();
        return {
            items,
            totalPages: Math.ceil(count / limit),
            currentPage: +page,
            totalItems: count,
        };
    }
    async findByStoreId(storeId) {
        let products = await this.product
            .find({ storeId: storeId }, {
            name: 1,
            count: 1,
            price: 1,
            Imagesproduct: 1,
            categoryId: 1,
            isSale: 1,
            saleValue: 1,
        })
            .populate('category', { name: 1, id: 1 });
        return products;
    }
    async findByIdAndUpdate(id, data) {
        return this.product.findByIdAndUpdate(id, data);
    }
    findByIdAndDelete(id) {
        return this.product.findByIdAndDelete(id);
    }
    async findSimilarProducts(productId) {
        const product = await this.product
            .findById(productId)
            .populate('collections')
            .exec();
        if (!product) {
            throw new common_1.NotFoundException('Product not found');
        }
        let collectionsProductsIds = [];
        for (let i = 0; i < product['collections'].length; i++) {
            collectionsProductsIds = [
                ...collectionsProductsIds,
                ...product['collections'][i]['productsIds'],
            ];
        }
        const similarProductsByTags = await this.product.find({
            storeId: product.storeId,
            _id: { $ne: product._id },
            tags: { $in: product.tags },
        });
        const similarProductsByCategories = await this.product
            .find({
            storeId: product.storeId,
            _id: {
                $ne: productId,
                $in: collectionsProductsIds,
            },
        })
            .exec();
        const similarProducts = [
            ...new Set([...similarProductsByTags, ...similarProductsByCategories]),
        ];
        return similarProducts;
    }
};
ProductRepository = __decorate([
    __param(0, (0, mongoose_1.InjectModel)(product_model_1.Product.name)),
    __param(1, (0, mongoose_1.InjectConnection)()),
    __metadata("design:paramtypes", [mongoose_2.default.Model, mongoose_2.default.Connection])
], ProductRepository);
exports.ProductRepository = ProductRepository;
//# sourceMappingURL=product.repository.js.map