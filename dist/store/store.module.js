"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoreModule = void 0;
const common_1 = require("@nestjs/common");
const store_service_1 = require("./services/store.service");
const mongoose_1 = require("@nestjs/mongoose");
const store_model_1 = require("./models/store.model");
const store_repository_1 = require("./repositories/store.repository");
const authentication_module_1 = require("../authentication/authentication.module");
const store_controller_1 = require("./controllers/seller/store.controller");
const store_controller_2 = require("./controllers/customer/store.controller");
const store_controller_3 = require("./controllers/admin/store.controller");
let StoreModule = class StoreModule {
};
StoreModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mongoose_1.MongooseModule.forFeature([{ name: store_model_1.Store.name, schema: store_model_1.StoreSchema }]),
            (0, common_1.forwardRef)(() => authentication_module_1.AuthenticationModule),
        ],
        controllers: [
            store_controller_3.StoreAdminController,
            store_controller_1.StoreSellerController,
            store_controller_2.StoreCustomerController,
        ],
        providers: [store_service_1.StoreService, store_repository_1.StoreRepository],
        exports: [store_service_1.StoreService],
    })
], StoreModule);
exports.StoreModule = StoreModule;
//# sourceMappingURL=store.module.js.map