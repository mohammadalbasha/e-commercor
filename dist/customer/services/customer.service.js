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
exports.CustomerService = void 0;
const common_1 = require("@nestjs/common");
const password_service_1 = require("../../authentication/password.service");
const customer_repository_1 = require("../repositories/customer.repository");
let CustomerService = class CustomerService {
    constructor(customerRepo, passwordSerivce) {
        this.customerRepo = customerRepo;
        this.passwordSerivce = passwordSerivce;
    }
    async signup(data) {
        const hashedPassword = await this.passwordSerivce.hashPassword(data.password);
        return this.customerRepo.create(Object.assign(Object.assign({}, data), { password: hashedPassword }));
    }
    async findById(customerId) {
        return this.customerRepo.findById(customerId);
    }
    async findByIdAndStoreId(customerId, storeId) {
        return this.customerRepo.findByIdAndStoreId(customerId, storeId);
    }
    async findByEmailAndStoreId(email, storeId) {
        return this.customerRepo.findByEmailAndStoreId(email, storeId);
    }
};
CustomerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [customer_repository_1.CustomerRepository,
        password_service_1.PasswordService])
], CustomerService);
exports.CustomerService = CustomerService;
//# sourceMappingURL=customer.service.js.map