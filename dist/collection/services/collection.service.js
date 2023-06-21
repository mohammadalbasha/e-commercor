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
    async addProductToCollection(data) {
        const product = await this.prodcutService.findById(data.productId);
        if (product.storeId != data.storeId) {
            throw new common_1.UnauthorizedException("you don't have access to this product");
        }
        return this.collectionRepo.addProductToCollection(data.collectionId, data.productId);
    }
    async findById(collectionId, storeId) {
        const collection = await this.collectionRepo.findById(collectionId);
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