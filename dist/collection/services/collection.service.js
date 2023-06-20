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
let CollectionService = class CollectionService {
    constructor(collectionRepo) {
        this.collectionRepo = collectionRepo;
    }
    create(data) {
        return this.collectionRepo.create(data);
    }
    async addProductToCollection(data) {
        return this.collectionRepo.addProductToCollection(data.collectionId, data.productId);
    }
    findById(collectionId) {
        return this.collectionRepo.findById(collectionId);
    }
    findByStoreId(storeId) {
        return this.collectionRepo.findByStoreId(storeId);
    }
};
CollectionService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [collection_repository_1.CollectionRepository])
], CollectionService);
exports.CollectionService = CollectionService;
//# sourceMappingURL=collection.service.js.map