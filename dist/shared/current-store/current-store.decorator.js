"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetCurrentStore = void 0;
const common_1 = require("@nestjs/common");
exports.GetCurrentStore = (0, common_1.createParamDecorator)((data, context) => {
    const request = context.switchToHttp().getRequest();
    return data ? request.store[data] : request.store;
});
//# sourceMappingURL=current-store.decorator.js.map