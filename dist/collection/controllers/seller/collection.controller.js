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
exports.CollectionSellerController = void 0;
const common_1 = require("@nestjs/common");
const get_seller_store_id_decorator_1 = require("../../../authentication/decorators/get-seller-store-id.decorator");
const guards_1 = require("../../../authentication/sellers/guards");
const add_product_dto_1 = require("../../dtos/add-product.dto");
const create_collection_dto_1 = require("../../dtos/create-collection.dto");
const collection_service_1 = require("../../services/collection.service");
const current_store_decorator_1 = require("../../../shared/current-store/current-store.decorator");
const store_model_1 = require("../../../store/models/store.model");
let CollectionSellerController = class CollectionSellerController {
    constructor(collectionService) {
        this.collectionService = collectionService;
    }
    async create(data, storeId) {
        const category = await this.collectionService.create(Object.assign(Object.assign({}, data), { storeId }));
        return 'collection created successfully';
    }
    async addProductToCollection(data, storeId, collectionId) {
        const category = await this.collectionService.addProductToCollection(Object.assign(Object.assign({}, data), { storeId,
            collectionId }));
        return 'collection created successfully';
    }
    list(store) {
        return this.collectionService.findByStoreId(store.id);
    }
    listOne(collectionId) {
        return this.collectionService.findById(collectionId);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_seller_store_id_decorator_1.GetSellerStoreId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_collection_dto_1.CreateCollectionDto, String]),
    __metadata("design:returntype", Promise)
], CollectionSellerController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('/:id/add-product'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_seller_store_id_decorator_1.GetSellerStoreId)()),
    __param(2, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [add_product_dto_1.AddProductToCollectionDto, String, Object]),
    __metadata("design:returntype", Promise)
], CollectionSellerController.prototype, "addProductToCollection", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, current_store_decorator_1.GetCurrentStore)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [store_model_1.Store]),
    __metadata("design:returntype", void 0)
], CollectionSellerController.prototype, "list", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CollectionSellerController.prototype, "listOne", null);
CollectionSellerController = __decorate([
    (0, common_1.UseGuards)(guards_1.AtSellerGuard),
    (0, common_1.Controller)('seller/collections'),
    __metadata("design:paramtypes", [collection_service_1.CollectionService])
], CollectionSellerController);
exports.CollectionSellerController = CollectionSellerController;
//# sourceMappingURL=collection.controller.js.map