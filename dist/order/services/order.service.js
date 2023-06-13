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
exports.OrderService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const product_service_1 = require("../../product/services/product.service");
const order_repository_1 = require("../repository/order.repository");
const paypal_service_1 = require("../../paypal/services/paypal.service");
let OrderService = class OrderService {
    constructor(connection, productService, orderRepo, paypalService) {
        this.connection = connection;
        this.productService = productService;
        this.orderRepo = orderRepo;
        this.paypalService = paypalService;
    }
    async purchaseProduct(data, store) {
        const session = await this.connection.startSession();
        let updatedProduct;
        let newOrder;
        session.startTransaction();
        try {
            const product = await this.productService.findById(data.productId, session);
            if (!product) {
                throw new common_1.NotFoundException('Product not found');
            }
            if (product.count < 1) {
                throw new common_1.BadRequestException('Insufficient product count');
            }
            const updatedProduct = await this.productService.decreamentCount({ productId: data.productId, version: product.version }, session);
            if (!updatedProduct) {
                throw new common_1.NotFoundException('Product not found or version mismatch');
            }
            console.log(data);
            const order = await this.orderRepo.create(data, session);
            if (!order) {
                throw new common_1.InternalServerErrorException('Error creating order');
            }
            console.log(order);
            const paypalOrder = await this.paypalService.createOrder(store.paypalMerchantId, product.price, store.name, store.id, order.id);
            if (!paypalOrder) {
                throw new common_1.InternalServerErrorException('Error creating order');
            }
            await session.commitTransaction();
            return paypalOrder;
        }
        catch (err) {
            await session.abortTransaction();
            throw err;
        }
        finally {
            session.endSession();
        }
    }
    async captureOrder(storeId, orderId, token) {
        const isCaptured = await this.paypalService.captureOrder(token);
        await this.orderRepo.updateOne({ id: orderId }, { isCaptured: true });
        return isCaptured;
    }
    async cancelOrder(storeId, orderId) {
        const order = await this.orderRepo.findById(orderId);
        const session = await this.connection.startSession();
        session.startTransaction();
        try {
            const product = await this.productService.findById(order.productId);
            await this.productService.increamentCount({ productId: product.id, version: product.version }, session);
            await session.commitTransaction();
        }
        catch (_a) {
            await session.abortTransaction();
        }
        finally {
            session.endSession();
        }
    }
};
OrderService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectConnection)()),
    __metadata("design:paramtypes", [mongoose_2.default.Connection, product_service_1.ProductService,
        order_repository_1.OrderRepository,
        paypal_service_1.PaypalService])
], OrderService);
exports.OrderService = OrderService;
//# sourceMappingURL=order.service.js.map