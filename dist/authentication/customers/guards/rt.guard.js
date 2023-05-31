"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RtCustomerGuard = void 0;
const passport_1 = require("@nestjs/passport");
class RtCustomerGuard extends (0, passport_1.AuthGuard)('jwt-refresh-customer') {
    constructor() {
        super();
    }
}
exports.RtCustomerGuard = RtCustomerGuard;
//# sourceMappingURL=rt.guard.js.map