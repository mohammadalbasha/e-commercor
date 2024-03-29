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
exports.CollectionService = void 0;
const common_1 = require("@nestjs/common");
const collection_repository_1 = require("../repositories/collection.repository");
const product_service_1 = require("../../product/services/product.service");
let CollectionService = class CollectionService {
    constructor(collectionRepo, prodcutService) {
        this.collectionRepo = collectionRepo;
        this.prodcutService = prodcutService;
    }
    create(data) {
        return this.collectionRepo.create(data);
    }
    async deleteCollection(collectionId, storeId) {
        const collection = await this.collectionRepo.findById(collectionId);
        if (!collection)
            throw new common_1.NotFoundException('collection not found');
        if (collection.storeId != storeId)
            throw new common_1.UnauthorizedException("you don't have access to this collection");
        return this.collectionRepo.deleteOne(collectionId);
    }
    async addProductToCollection(data) {
        const product = await this.prodcutService.findById(data.productId);
        if (product.storeId != data.storeId) {
            throw new common_1.UnauthorizedException("you don't have access to this product");
        }
        const collection = await this.collectionRepo.findById(data.collectionId);
        if (!collection)
            throw new common_1.NotFoundException('collection not found');
        if (collection.productsId.includes(data.productId))
            throw new common_1.BadRequestException('product already added');
        if (collection.isSale) {
            const collections = await this.collectionRepo.findByStoreId(collection.storeId);
            for (let i = 0; i < collections.length; i++) {
                console.log(collections[i]);
                if (collections[i].isSale &&
                    collections[i].productsId.includes(data.productId))
                    throw new common_1.BadRequestException('product already added to  another sale collection');
            }
            await this.prodcutService.findByIdAndUpdate(data.productId, {
                isSale: true,
                saleValue: collection.saleValue,
            });
        }
        return this.collectionRepo.addProductToCollection(data.collectionId, data.productId);
    }
    async removeProductFromCollection(data) {
        const product = await this.prodcutService.findById(data.productId);
        if (product.storeId != data.storeId) {
            throw new common_1.UnauthorizedException("you don't have access to this product");
        }
        const collection = await this.collectionRepo.findById(data.collectionId);
        if (!collection)
            throw new common_1.NotFoundException('collection not found');
        if (!collection.productsId.includes(data.productId))
            throw new common_1.BadRequestException('product not assigned to this collection');
        if (collection.isSale) {
            await this.prodcutService.findByIdAndUpdate(data.productId, {
                isSale: false,
                saleValue: 0,
            });
        }
        return this.collectionRepo.removeProductFromCollection(data.collectionId, data.productId);
    }
    async findById(collectionId, storeId) {
        const collection = await this.collectionRepo.findById(collectionId);
        if (!collection)
            throw new common_1.NotFoundException('collection not found');
        console.log(collection);
        if (collection.storeId != storeId) {
            throw new common_1.UnauthorizedException("you don't have access to this collection");
        }
        return collection;
    }
    findByStoreId(storeId) {
        return this.collectionRepo.findByStoreId(storeId);
    }
};
CollectionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [collection_repository_1.CollectionRepository,
        product_service_1.ProductService])
], CollectionService);
exports.CollectionService = CollectionService;
//# sourceMappingURL=collection.service.js.map