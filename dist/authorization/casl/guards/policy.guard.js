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
exports.PoliciesGuard = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const checkPolicies_decorator_1 = require("../checkPolicies.decorator");
let PoliciesGuard = class PoliciesGuard {
    constructor(reflector, connection) {
        this.reflector = reflector;
        this.connection = connection;
    }
    async canActivate(context) {
        const policyHandlers = this.reflector.getAllAndOverride(checkPolicies_decorator_1.CHECK_POLICIES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (!policyHandlers) {
            return true;
        }
        let req;
        const user = req.user;
        const ability = req.ability;
        let result = true;
        for (const i in policyHandlers) {
            const handler = policyHandlers[i];
            const action = handler[0];
            const Model = handler[1];
            result = ability.can(action, Model.name);
            if (!result)
                break;
        }
        return result;
    }
};
PoliciesGuard = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, mongoose_1.InjectConnection)()),
    __metadata("design:paramtypes", [core_1.Reflector,
        mongoose_2.Connection])
], PoliciesGuard);
exports.PoliciesGuard = PoliciesGuard;
//# sourceMappingURL=policy.guard.js.map