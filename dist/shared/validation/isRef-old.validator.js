"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsRef = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const class_validator_1 = require("class-validator");
const mongoose_2 = require("mongoose");
const mongoose = require("mongoose");
let IsRef = class IsRef {
    constructor(connection) {
        this.connection = connection;
    }
    async validate(value, args) {
        if (args.constraints === undefined) {
            if (Array.isArray(value)) {
                for (const v of value) {
                    if (!mongoose.Types.ObjectId.isValid(v))
                        return false;
                }
                return true;
            }
            else {
                return mongoose.Types.ObjectId.isValid(value);
            }
        }
        let [Model, where] = args.constraints;
        if (!where)
            where = {};
        where = Object.assign({ isActive: true }, where);
        if (Array.isArray(value)) {
            for (const v of value) {
                if (!mongoose.Types.ObjectId.isValid(v))
                    return false;
                const result = await this.connection.models[Model.name].findOne(Object.assign({ _id: new mongoose.Types.ObjectId(v) }, where));
                if (!result)
                    return false;
            }
            return true;
        }
        if (!mongoose.Types.ObjectId.isValid(value))
            return false;
        const result = await this.connection.models[Model.name].findOne(Object.assign({ _id: new mongoose.Types.ObjectId(value) }, where));
        return result ? true : false;
    }
    defaultMessage(args) {
        return `invalid ${args.property} value`;
    }
};
IsRef = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'isRef', async: true }),
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectConnection)()),
    __metadata("design:paramtypes", [mongoose_2.Connection])
], IsRef);
exports.IsRef = IsRef;
//# sourceMappingURL=isRef-old.validator.js.map