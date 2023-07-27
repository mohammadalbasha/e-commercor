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
exports.FeedbackCustomerController = void 0;
const common_1 = require("@nestjs/common");
const guards_1 = require("../../../authentication/customers/guards");
const decorators_1 = require("../../../authentication/decorators");
const get_seller_store_id_decorator_1 = require("../../../authentication/decorators/get-seller-store-id.decorator");
const create_feedback_dto_1 = require("../../dtos/create-feedback.dto");
const feedback_service_1 = require("../../services/feedback.service");
let FeedbackCustomerController = class FeedbackCustomerController {
    constructor(feedbackService) {
        this.feedbackService = feedbackService;
    }
    async create(data, storeId, userId) {
        const feedback = await this.feedbackService.create(Object.assign(Object.assign({}, data), { storeId, customerId: userId }));
        return 'feedback created successfully';
    }
    listMyFeedbacks(userId) {
        return this.feedbackService.findByCustomerId(userId);
    }
    list(productId) {
        return this.feedbackService.findByProductId(productId);
    }
};
__decorate([
    (0, common_1.UseGuards)(guards_1.AtCustomerGuard),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, get_seller_store_id_decorator_1.GetSellerStoreId)()),
    __param(2, (0, decorators_1.GetCurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_feedback_dto_1.CreateFeedbackDto, String, String]),
    __metadata("design:returntype", Promise)
], FeedbackCustomerController.prototype, "create", null);
__decorate([
    (0, common_1.UseGuards)(guards_1.AtCustomerGuard),
    (0, common_1.Get)('/my-feedbacks'),
    __param(0, (0, decorators_1.GetCurrentUserId)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FeedbackCustomerController.prototype, "listMyFeedbacks", null);
__decorate([
    (0, common_1.Get)('/:productId'),
    __param(0, (0, common_1.Param)('productId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], FeedbackCustomerController.prototype, "list", null);
FeedbackCustomerController = __decorate([
    (0, common_1.Controller)('/:storeId/feedbacks'),
    __metadata("design:paramtypes", [feedback_service_1.FeedbackService])
], FeedbackCustomerController);
exports.FeedbackCustomerController = FeedbackCustomerController;
//# sourceMappingURL=feedback.controller.js.map