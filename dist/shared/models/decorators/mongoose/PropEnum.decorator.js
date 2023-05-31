"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("@nestjs/mongoose");
function PropEnum(Enum, defaultValue = null) {
    if (defaultValue === null) {
        return (0, mongoose_1.Prop)({ required: false, enum: Enum, index: true });
    }
    else {
        return (0, mongoose_1.Prop)({ required: false, enum: Enum, index: true, default: defaultValue });
    }
}
exports.default = PropEnum;
//# sourceMappingURL=PropEnum.decorator.js.map