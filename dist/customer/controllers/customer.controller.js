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
exports.CustomerController = void 0;
const common_1 = require("@nestjs/common");
const signup_dto_1 = require("../dtos/signup.dto");
const customer_service_1 = require("../services/customer.service");
const guards_1 = require("../../authentication/customers/guards");
const decorators_1 = require("../../authentication/decorators");
const customer_model_1 = require("../models/customer.model");
let CustomerController = class CustomerController {
    constructor(customerService) {
        this.customerService = customerService;
    }
    signup(data, storeId) {
        return this.customerService.signup(Object.assign(Object.assign({}, data), { storeId }));
    }
    me(user) { }
};
__decorate([
    (0, common_1.Post)('signup'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('storeId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signup_dto_1.SignupDto, String]),
    __metadata("design:returntype", void 0)
], CustomerController.prototype, "signup", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.AtCustomerGuard),
    (0, common_1.Get)('me'),
    __param(0, (0, decorators_1.GetCurrentUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_model_1.Customer]),
    __metadata("design:returntype", void 0)
], CustomerController.prototype, "me", null);
CustomerController = __decorate([
    (0, common_1.Controller)('/:storeId'),
    __metadata("design:paramtypes", [customer_service_1.CustomerService])
], CustomerController);
exports.CustomerController = CustomerController;
//# sourceMappingURL=customer.controller.js.map