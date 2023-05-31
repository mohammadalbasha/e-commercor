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
exports.ProductSellerController = void 0;
const common_1 = require("@nestjs/common");
const get_seller_store_id_decorator_1 = require("../../../authentication/decorators/get-seller-store-id.decorator");
const guards_1 = require("../../../authentication/sellers/guards");
const product_service_1 = require("../../services/product.service");
let ProductSellerController = class ProductSellerController {
    constructor(productService) {
        this.productService = productService;
    }
    create(data, storeId) {
        return this.productService.create(Object.assign(Object.assign({}, data), { storeId }));
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_seller_store_id_decorator_1.GetSellerStoreId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], ProductSellerController.prototype, "create", null);
ProductSellerController = __decorate([
    (0, common_1.UseGuards)(guards_1.AtSellerGuard),
    (0, common_1.Controller)('/seller/products'),
    __metadata("design:paramtypes", [product_service_1.ProductService])
], ProductSellerController);
exports.ProductSellerController = ProductSellerController;
//# sourceMappingURL=product.controller.js.map