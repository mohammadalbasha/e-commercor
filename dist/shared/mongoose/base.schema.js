"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseSchema = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const PropRef_decorator_1 = require("../models/decorators/mongoose/PropRef.decorator");
function BaseSchema(Model) {
    const Schema = mongoose_1.SchemaFactory.createForClass(Model);
    const virtuals = (0, PropRef_decorator_1.getMongooseVirtuals)(Model);
    for (const v in virtuals) {
        Schema.virtual(v, virtuals[v]);
    }
    return Schema;
}
exports.BaseSchema = BaseSchema;
//# sourceMappingURL=base.schema.js.map