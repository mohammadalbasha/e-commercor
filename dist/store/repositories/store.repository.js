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
exports.StoreRepository = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const store_model_1 = require("../models/store.model");
const mongoose_2 = require("mongoose");
const common_1 = require("@nestjs/common");
const convertNestedObject_helper_1 = require("../../shared/mongoose/helperFunctions/convertNestedObject.helper");
let StoreRepository = class StoreRepository {
    constructor(store, connection) {
        this.store = store;
        this.connection = connection;
    }
    async create(input) {
        const store = await this.store.create(input);
        await store.save();
        return store;
    }
    async findAll(filter) {
        return this.store.find(Object.assign({}, filter));
    }
    findOne(filter) {
        return this.store.findOne(Object.assign({}, filter));
    }
    findById(storeId) {
        return this.store.findById(storeId);
    }
    findByName(storeName) {
        return this.store.findOne({ name: storeName });
    }
    findByIdAndUpdate(storeId, data) {
        return this.store.findByIdAndUpdate(storeId, Object.assign({}, data), { new: true });
    }
    findBySellerIdAndUpdate(sellerId, data) {
        return this.store.findOneAndUpdate({ 'seller._id': sellerId }, Object.assign({}, data), { new: true });
    }
    async findBySellerId(sellerId) {
        const store = await this.store.findOne({
            'seller._id': sellerId,
        });
        return store;
    }
    async findSeller(filter) {
        const nestedFilter = (0, convertNestedObject_helper_1.convertObjectToNested)('seller', filter);
        const dottedFilter = (0, convertNestedObject_helper_1.convertToDotNotation)(nestedFilter);
        const seller = await this.store.findOne(Object.assign({}, dottedFilter), {
            seller: 1,
        });
        return seller === null || seller === void 0 ? void 0 : seller.seller;
    }
    async findSellerById(sellerId) {
        const seller = await this.store.findOne({
            'seller._id': sellerId,
        }, {
            seller: 1,
        });
        return seller === null || seller === void 0 ? void 0 : seller.seller;
    }
    async findSellerByEmail(email) {
        const seller = await this.store.findOne({
            'seller.email': email,
        }, {
            seller: 1,
        });
        return seller === null || seller === void 0 ? void 0 : seller.seller;
    }
    async findSellerAndUpdate(filter, data) {
        const updatedUser = await this.store.updateOne;
    }
    async findSellerByIdAndUpdate(sellerId, data) {
        const nestedSeller = (0, convertNestedObject_helper_1.convertObjectToNested)('seller', data);
        const dottedSeller = (0, convertNestedObject_helper_1.convertToDotNotation)(nestedSeller);
        const updatedUser = await this.store.updateOne({
            'seller._id': sellerId,
        }, {
            $set: Object.assign({}, dottedSeller),
        });
        return updatedUser;
    }
};
StoreRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(store_model_1.Store.name)),
    __param(1, (0, mongoose_1.InjectConnection)()),
    __metadata("design:paramtypes", [mongoose_2.default.Model, mongoose_2.default.Connection])
], StoreRepository);
exports.StoreRepository = StoreRepository;
//# sourceMappingURL=store.repository.js.map