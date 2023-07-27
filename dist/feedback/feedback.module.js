"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbackModule = void 0;
const common_1 = require("@nestjs/common");
const feedback_service_1 = require("./services/feedback.service");
const feedback_controller_1 = require("./controllers/seller/feedback.controller");
const feedback_repository_1 = require("./repositories/feedback.repository");
const mongoose_1 = require("@nestjs/mongoose");
const feedback_model_1 = require("./models/feedback.model");
const feedback_controller_2 = require("./controllers/customer/feedback.controller");
const product_module_1 = require("../product/product.module");
let FeedbackModule = class FeedbackModule {
};
FeedbackModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: feedback_model_1.Feedback.name, schema: feedback_model_1.FeedbackSchema },
            ]),
            product_module_1.ProductModule,
        ],
        providers: [feedback_service_1.FeedbackService, feedback_repository_1.FeedbackRepository],
        controllers: [feedback_controller_1.FeedbackSellerController, feedback_controller_2.FeedbackCustomerController],
        exports: [feedback_service_1.FeedbackService],
    })
], FeedbackModule);
exports.FeedbackModule = FeedbackModule;
//# sourceMappingURL=feedback.module.js.map