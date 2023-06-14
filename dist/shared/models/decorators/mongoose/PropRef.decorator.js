"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMongooseVirtuals = exports.PropObject = exports.PropRef = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose = require("mongoose");
function PropRef(Model, isArray = false) {
    if (isArray) {
        return (0, mongoose_1.Prop)({
            type: [mongoose.Schema.Types.ObjectId],
            ref: Model.name,
            index: true,
        });
    }
    return (0, mongoose_1.Prop)({
        type: mongoose.Schema.Types.ObjectId,
        ref: Model.name,
        index: true,
    });
}
exports.PropRef = PropRef;
function PropObject(Model, isArray = false, foreignField = '') {
    return (target, key) => {
        let meta = {
            ref: Model.name,
            localField: key.toString() + 'Id',
            foreignField: '_id',
            justOne: !isArray,
        };
        if (foreignField !== '') {
            meta.localField = '_id';
            meta.foreignField = foreignField;
        }
        const virtuals = Reflect.getOwnMetadata('MongooseVirtuals', target.constructor) || {};
        virtuals[key] = meta;
        Reflect.defineMetadata('MongooseVirtuals', virtuals, target.constructor);
    };
}
exports.PropObject = PropObject;
function getMongooseVirtuals(Model) {
    return Reflect.getMetadata('MongooseVirtuals', Model);
}
exports.getMongooseVirtuals = getMongooseVirtuals;
//# sourceMappingURL=PropRef.decorator.js.map