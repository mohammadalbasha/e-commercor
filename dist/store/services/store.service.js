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
exports.StoreService = void 0;
const common_1 = require("@nestjs/common");
const store_repository_1 = require("../repositories/store.repository");
const password_service_1 = require("../../authentication/password.service");
let StoreService = class StoreService {
    constructor(storeRepo, passwordService) {
        this.storeRepo = storeRepo;
        this.passwordService = passwordService;
    }
    async create(input) {
        const hashedPassword = await this.passwordService.hashPassword(input.seller.password);
        const _a = input.seller, { confirmPassword } = _a, seller = __rest(_a, ["confirmPassword"]);
        const store = await this.storeRepo.create(Object.assign(Object.assign({}, input), { seller: Object.assign(Object.assign({}, seller), { password: hashedPassword }) }));
        await store.save();
        return store;
    }
    findBySellerId(sellerId) {
        return this.storeRepo.findBySellerId(sellerId);
    }
    findAll(filter) {
        return this.storeRepo.findAll(filter);
    }
    findOne(filter) {
        return this.storeRepo.findOne(filter);
    }
    findById(storeId) {
        return this.storeRepo.findById(storeId);
    }
    findByName(storeName) {
        return this.storeRepo.findByName(storeName);
    }
    findByIdAndUpdate(storeId, data) {
        return this.storeRepo.findByIdAndUpdate(storeId, data);
    }
    findSeller(filter) {
        return this.storeRepo.findSeller(filter);
    }
    findSellerById(sellerId) {
        return this.storeRepo.findSellerById(sellerId);
    }
    findSellerByEmail(email) {
        return this.storeRepo.findSellerByEmail(email);
    }
    findSellerAndUpdate(filter, data) {
        return this.storeRepo.findSellerAndUpdate(filter, data);
    }
    findSellerByIdAndUpdate(sellerId, data) {
        return this.storeRepo.findSellerByIdAndUpdate(sellerId, data);
    }
    addLandingPage(sellerId, data) {
        return this.storeRepo.findBySellerIdAndUpdate(sellerId, {
            landingPage: data,
        });
    }
    addMarketPlace(sellerId, data) {
        return this.storeRepo.findBySellerIdAndUpdate(sellerId, Object.assign(Object.assign({}, data), { isVerifiedAsMarket: false }));
    }
};
StoreService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [store_repository_1.StoreRepository,
        password_service_1.PasswordService])
], StoreService);
exports.StoreService = StoreService;
//# sourceMappingURL=store.service.js.map