import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
import { Connection } from 'mongoose';
import { BaseModel } from '../models/base.model';
import { ClsService } from 'nestjs-cls';
import { MyClsStore } from '../cls/cls.interface';
interface UniqueMultiValidationArguments<E> extends ValidationArguments {
    constraints: [typeof BaseModel, string, string];
}
export declare class UniqueCategoryName implements ValidatorConstraintInterface {
    private connection;
    private readonly cls;
    constructor(connection: Connection, cls: ClsService<MyClsStore>);
    validate<E>(value: string, args: UniqueMultiValidationArguments<E>): Promise<boolean>;
    defaultMessage(args: ValidationArguments): string;
}
export {};
