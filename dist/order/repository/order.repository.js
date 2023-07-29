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
exports.OrderRepository = void 0;
const mongoose_1 = require("mongoose");
const order_model_1 = require("../models/order.model");
const mongoose_2 = require("@nestjs/mongoose");
let OrderRepository = class OrderRepository {
    constructor(order) {
        this.order = order;
    }
    async create(data, session) {
        console.log(Object.assign({}, data));
        const order = await this.order.create([Object.assign({}, data)], { session: session });
        return order;
    }
    updateOne(filter, data) {
        return this.order.updateOne(filter, data);
    }
    findById(id) {
        return this.order.findById(id);
    }
    listByStore(storeId) {
        return this.order.find({ storeId: storeId });
    }
    listByUser(userId) {
        return this.order.find({ customerId: userId });
    }
};
OrderRepository = __decorate([
    __param(0, (0, mongoose_2.InjectModel)(order_model_1.Order.name)),
    __metadata("design:paramtypes", [mongoose_1.default.Model])
], OrderRepository);
exports.OrderRepository = OrderRepository;
//# sourceMappingURL=order.repository.js.map