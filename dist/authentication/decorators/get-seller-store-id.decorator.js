"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetSellerStoreId = void 0;
const common_1 = require("@nestjs/common");
exports.GetSellerStoreId = (0, common_1.createParamDecorator)((_, context) => {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    return user.storeId;
});
//# sourceMappingURL=get-seller-store-id.decorator.js.map