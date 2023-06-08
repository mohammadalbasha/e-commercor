"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductModule = void 0;
const common_1 = require("@nestjs/common");
const product_repository_1 = require("./repositories/product.repository");
const product_service_1 = require("./services/product.service");
const product_controller_1 = require("./controllers/seller/product.controller");
const category_module_1 = require("../category/category.module");
const mongoose_1 = require("@nestjs/mongoose");
const product_model_1 = require("./models/product.model");
const product_controller_2 = require("./controllers/customer/product.controller");
let ProductModule = class ProductModule {
};
ProductModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: product_model_1.Product.name, schema: product_model_1.ProductSchema }]),
            category_module_1.CategoryModule,
        ],
        controllers: [product_controller_1.ProductSellerController, product_controller_2.ProductCustomerController],
        providers: [product_service_1.ProductService, product_repository_1.ProductRepository],
        exports: [product_service_1.ProductService],
    })
], ProductModule);
exports.ProductModule = ProductModule;
//# sourceMappingURL=product.module.js.map