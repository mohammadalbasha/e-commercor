import { Ability, AbilityBuilder, AbilityClass, ExtractSubjectType, InferSubjects } from "@casl/ability";
import { ConsoleLogger, Injectable, Post, Type } from "@nestjs/common";
import { Action } from "./action.enum";
import { User } from "./user.model";
import { BaseModel } from "../../shared/models/base.model";

// type Subjects = InferSubjects<PrismaModels> | 'all';
// export type Subjects = PrismaModels | 'all' | typeof BaseModel;
export type Subjects = typeof BaseModel | 'all';

export type AppAbility = Ability<[Action, Subjects]>;

@Injectable()
export class CaslAbilityFactory {

  
  createForUser(user: User) {
    
    if (!user) return null;

    const ability = new CaslAbility();
    
        //ability.can(Action.Manage, Country, null, ["code"]); //do we need code here?
        //ability.can(Action.Manage, BusinessType);
        //ability.can(Action.Manage, Speciality);
      ability.can(Action.Create, User);
      

    return ability.build()
  }


  createForGuest() {
    const ability = new CaslAbility();
//    ability.can(Action.Read, MediaFile, {isPublic: true})
    return ability.build()
  }
}


class CaslAbility {
  protected innerCan
  protected innerBuild
  protected innerCannot
  constructor() {
    const { can, cannot, build } = new AbilityBuilder<Ability<[Action, Subjects]>>(Ability as AbilityClass<AppAbility>);
    this.innerCan = can
    this.innerCannot = cannot
    this.innerBuild = build
  }

  can <Model extends BaseModel>(action:Action, subject: Type<Model>, conditions?:{[P in keyof Model]?: Model[P]}, fields?: [keyof Model], cannotFields?: [keyof Model]) {
    this.innerCan(action, subject.name, fields, conditions)
    if (cannotFields) {
      this.innerCannot(action, subject.name, cannotFields, conditions)
    }
  }

  /* mohammad albacha */ 
  can2 <Model extends BaseModel>(action:Action, subject: string, conditions?:{[P in keyof Model]?: Model[P]}, fields?: [keyof Model], cannotFields?: [keyof Model]) {
    this.innerCan(action, subject , fields, conditions)
    if (cannotFields) {
      this.innerCannot(action, subject , cannotFields, conditions)
    }
  }

  cannot <Model extends typeof BaseModel>(action:Action, subject: Model, conditions?:{[P in keyof Model]?: Model[P]}, fields?: [keyof Model]) {
    this.innerCannot(action, subject.name, fields, conditions)
  }

  build () {
    return this.innerBuild({
      // Read https://casl.js.org/v5/en/guide/subject-type-detection#use-classes-as-subject-types for details
      detectSubjectType: (item:BaseModel) => {
        return (item.constructor as any).modelName as ExtractSubjectType<Subjects>
        // return (item as any)._prismaTypeName; 
      },
    });
  }

}