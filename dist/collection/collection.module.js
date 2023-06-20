"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CollectionModule = void 0;
const common_1 = require("@nestjs/common");
const collection_service_1 = require("./services/collection.service");
const collection_controller_1 = require("./controllers/seller/collection.controller");
const collection_repository_1 = require("./repositories/collection.repository");
const mongoose_1 = require("@nestjs/mongoose");
const collection_model_1 = require("./models/collection.model");
const collection_controller_2 = require("./controllers/customer/collection.controller");
let CollectionModule = class CollectionModule {
};
CollectionModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([
                { name: collection_model_1.Collection.name, schema: collection_model_1.CollectionSchema },
            ]),
        ],
        providers: [collection_service_1.CollectionService, collection_repository_1.CollectionRepository],
        controllers: [collection_controller_1.CollectionSellerController, collection_controller_2.CollectionCustomerController],
        exports: [collection_service_1.CollectionService],
    })
], CollectionModule);
exports.CollectionModule = CollectionModule;
//# sourceMappingURL=collection.module.js.map