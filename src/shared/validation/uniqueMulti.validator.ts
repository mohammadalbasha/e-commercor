import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import {
  ValidationArguments,
  ValidatorConstraintInterface,
  ValidatorConstraint,
} from 'class-validator';
import { Connection } from 'mongoose';
import { BaseModel } from '../models/base.model';

interface UniqueMultiValidationArguments<E> extends ValidationArguments {
  // constraints: [
  //   ObjectType<E> | EntitySchema<E> | string,
  //   ((validationArguments: ValidationArguments) => FindConditions<E>) | keyof E,
  // ];
  constraints: [typeof BaseModel, string, string];
}

@ValidatorConstraint({ name: 'unique', async: true })
@Injectable()
export class UniqueMulti implements ValidatorConstraintInterface {
  constructor(@InjectConnection() private connection: Connection) {}

  public async validate<E>(
    value: string,
    args: UniqueMultiValidationArguments<E>,
  ) {
    const [Model, ...columns] = args.constraints;

    let where = {};
    if ('id' in args.object) {
      where = Object.assign(where, { _id: { $ne: args.object['id'] } });
    }

    if (args.object) {
      columns.forEach((column) => {
        where = Object.assign(where, {
          [column]: args.object[column],
        });
      });
    } else {
      return true;
    }

    // // third parameter to the validator
    // // if (except) {
    // //   where = Object.assign(where, { id: { not: args.object[except] } })
    // // }

    const result = await this.connection.models[Model.name].findOne(where);
    return result ? false : true;
  }

  public defaultMessage(args: ValidationArguments) {
    const [entity, ...columns] = args.constraints;
    // const entity = EntityClass.name || 'Entity';
    return `${columns} value already exist`;
  }
}
