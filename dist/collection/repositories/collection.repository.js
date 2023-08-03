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
exports.CollectionRepository = void 0;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
const collection_model_1 = require("../models/collection.model");
const common_1 = require("@nestjs/common");
let CollectionRepository = class CollectionRepository {
    constructor(collection) {
        this.collection = collection;
    }
    async create(data) {
        const collection = await this.collection.create(data);
        return collection;
    }
    async deleteOne(collectionId) {
        const collection = await this.collection.findById(collectionId);
        if (!collection) {
            throw new common_1.NotFoundException('collection not found');
        }
        return this.collection.findByIdAndDelete(collectionId);
    }
    async addProductToCollection(collectionId, productId) {
        const collection = await this.collection.findById(collectionId);
        if (!collection) {
            throw new common_1.NotFoundException('collection not found');
        }
        collection.productsId.push(productId);
        await collection.save();
        return collection;
    }
    async removeProductFromCollection(collectionId, productId) {
        const collection = await this.collection.findById(collectionId);
        if (!collection) {
            throw new common_1.NotFoundException('collection not found');
        }
        collection.productsId = collection.productsId.filter((item) => {
            return item != productId;
        });
        await collection.save();
        return collection;
    }
    async findById(collectionId) {
        const collection = await this.collection.findById(collectionId);
        return collection;
    }
    async findByStoreId(storeId) {
        const collections = await this.collection
            .find({
            storeId: storeId,
        })
            .populate('products');
        return collections;
    }
    findOne(filter) {
        return this.collection
            .findOne(Object.assign({}, filter))
            .populate('products')
            .exec();
    }
};
CollectionRepository = __decorate([
    __param(0, (0, mongoose_2.InjectModel)(collection_model_1.Collection.name)),
    __metadata("design:paramtypes", [mongoose_1.default.Model])
], CollectionRepository);
exports.CollectionRepository = CollectionRepository;
//# sourceMappingURL=collection.repository.js.map