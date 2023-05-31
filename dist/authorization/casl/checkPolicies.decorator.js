"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Can = exports.CHECK_POLICIES_KEY = void 0;
const common_1 = require("@nestjs/common");
exports.CHECK_POLICIES_KEY = 'check_policy';
const Can = (...handlers) => (0, common_1.SetMetadata)(exports.CHECK_POLICIES_KEY, handlers);
exports.Can = Can;
//# sourceMappingURL=checkPolicies.decorator.js.map