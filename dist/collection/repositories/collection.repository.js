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
    async addProductToCollection(collectionId, productId) {
        const collection = await this.collection.findById(collectionId);
        if (!collection) {
            throw new common_1.NotFoundException('collection not found');
        }
        collection.productsIds.push(productId);
        await collection.save();
        return collection;
    }
    async findById(collectionId) {
        const collection = await this.collection.findById(collectionId);
        return collection;
    }
    async findByStoreId(storeId) {
        const categories = await this.collection.find({
            storeId: storeId,
        });
        return categories;
    }
    async findAll(filter) {
        return this.collection.find(Object.assign({}, filter));
    }
    findOne(filter) {
        return this.collection.findOne(Object.assign({}, filter));
    }
};
CollectionRepository = __decorate([
    __param(0, (0, mongoose_2.InjectModel)(collection_model_1.Collection.name)),
    __metadata("design:paramtypes", [mongoose_1.default.Model])
], CollectionRepository);
exports.CollectionRepository = CollectionRepository;
//# sourceMappingURL=collection.repository.js.map