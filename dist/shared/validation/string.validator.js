"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StringValidate = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
function StringValidate(maxLength = 1000) {
    return (0, common_1.applyDecorators)((0, class_validator_1.IsOptional)(), (0, class_validator_1.MaxLength)(maxLength));
}
exports.StringValidate = StringValidate;
//# sourceMappingURL=string.validator.js.map