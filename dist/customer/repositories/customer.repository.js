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
exports.CustomerRepository = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const customer_model_1 = require("../models/customer.model");
let CustomerRepository = class CustomerRepository {
    constructor(customer, connection) {
        this.customer = customer;
        this.connection = connection;
    }
    async create(data) {
        const customer = await this.customer.create(data);
        return customer;
    }
    async findById(customerId) {
        const customer = await this.customer.findById(customerId);
        return customer;
    }
    async findByIdAndStoreId(customerId, storeId) {
        const customer = await this.customer.findOne({
            id: customerId,
            storeId: storeId,
        });
        return customer;
    }
    async findByEmailAndStoreId(email, storeId) {
        const customer = await this.customer.findOne({
            email: email,
            storeId: storeId,
        });
        return customer;
    }
};
CustomerRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(customer_model_1.Customer.name)),
    __param(1, (0, mongoose_1.InjectConnection)()),
    __metadata("design:paramtypes", [mongoose_2.default.Model, mongoose_2.default.Connection])
], CustomerRepository);
exports.CustomerRepository = CustomerRepository;
//# sourceMappingURL=customer.repository.js.map