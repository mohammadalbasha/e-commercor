"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CaslAbilityFactory = void 0;
const ability_1 = require("@casl/ability");
const common_1 = require("@nestjs/common");
const action_enum_1 = require("./action.enum");
const user_model_1 = require("./user.model");
let CaslAbilityFactory = class CaslAbilityFactory {
    createForUser(user) {
        if (!user)
            return null;
        const ability = new CaslAbility();
        ability.can(action_enum_1.Action.Create, user_model_1.User);
        return ability.build();
    }
    createForGuest() {
        const ability = new CaslAbility();
        return ability.build();
    }
};
CaslAbilityFactory = __decorate([
    (0, common_1.Injectable)()
], CaslAbilityFactory);
exports.CaslAbilityFactory = CaslAbilityFactory;
class CaslAbility {
    constructor() {
        const { can, cannot, build } = new ability_1.AbilityBuilder(ability_1.Ability);
        this.innerCan = can;
        this.innerCannot = cannot;
        this.innerBuild = build;
    }
    can(action, subject, conditions, fields, cannotFields) {
        this.innerCan(action, subject.name, fields, conditions);
        if (cannotFields) {
            this.innerCannot(action, subject.name, cannotFields, conditions);
        }
    }
    can2(action, subject, conditions, fields, cannotFields) {
        this.innerCan(action, subject, fields, conditions);
        if (cannotFields) {
            this.innerCannot(action, subject, cannotFields, conditions);
        }
    }
    cannot(action, subject, conditions, fields) {
        this.innerCannot(action, subject.name, fields, conditions);
    }
    build() {
        return this.innerBuild({
            detectSubjectType: (item) => {
                return item.constructor.modelName;
            },
        });
    }
}
//# sourceMappingURL=casl-ability.factory.js.map