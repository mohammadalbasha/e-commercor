"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RtAdminGuard = void 0;
const passport_1 = require("@nestjs/passport");
class RtAdminGuard extends (0, passport_1.AuthGuard)('jwt-refresh-admin') {
    constructor() {
        super();
    }
}
exports.RtAdminGuard = RtAdminGuard;
//# sourceMappingURL=rt.guard.js.map