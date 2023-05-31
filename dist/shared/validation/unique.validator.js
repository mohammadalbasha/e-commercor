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
exports.Unique = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const class_validator_1 = require("class-validator");
const mongoose_2 = require("mongoose");
let Unique = class Unique {
    constructor(connection) {
        this.connection = connection;
    }
    async validate(value, args) {
        const [Model, column, except] = args.constraints;
        let where = { [column]: value };
        if ('id' in args.object) {
            where = Object.assign(where, { _id: { "$ne": args.object['id'] } });
        }
        const result = await this.connection.models[Model.name].findOne(where);
        return result ? false : true;
    }
    defaultMessage(args) {
        const [entity] = args.constraints;
        return `${args.property} value already exist`;
    }
};
Unique = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'unique', async: true }),
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectConnection)()),
    __metadata("design:paramtypes", [mongoose_2.Connection])
], Unique);
exports.Unique = Unique;
//# sourceMappingURL=unique.validator.js.map