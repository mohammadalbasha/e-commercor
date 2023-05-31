"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberValidate = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
function NumberValidate(min = 0, max = 1000000000) {
    return (0, common_1.applyDecorators)((0, class_validator_1.IsOptional)(), (0, class_validator_1.Min)(min), (0, class_validator_1.Max)(max));
}
exports.NumberValidate = NumberValidate;
//# sourceMappingURL=num.validator.js.map