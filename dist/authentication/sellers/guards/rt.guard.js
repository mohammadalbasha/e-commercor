"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RtSellerGuard = void 0;
const passport_1 = require("@nestjs/passport");
class RtSellerGuard extends (0, passport_1.AuthGuard)('jwt-refresh-seller') {
    constructor() {
        super();
    }
}
exports.RtSellerGuard = RtSellerGuard;
//# sourceMappingURL=rt.guard.js.map