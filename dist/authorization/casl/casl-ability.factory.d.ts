import { Ability } from "@casl/ability";
import { Action } from "./action.enum";
import { User } from "./user.model";
import { BaseModel } from "../../shared/models/base.model";
export type Subjects = typeof BaseModel | 'all';
export type AppAbility = Ability<[Action, Subjects]>;
export declare class CaslAbilityFactory {
    createForUser(user: User): any;
    createForGuest(): any;
}
