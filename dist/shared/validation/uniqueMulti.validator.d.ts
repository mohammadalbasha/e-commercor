import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
import { Connection } from 'mongoose';
import { BaseModel } from '../models/base.model';
interface UniqueMultiValidationArguments<E> extends ValidationArguments {
    constraints: [typeof BaseModel, string, string];
}
export declare class UniqueMulti implements ValidatorConstraintInterface {
    private connection;
    constructor(connection: Connection);
    validate<E>(value: string, args: UniqueMultiValidationArguments<E>): Promise<boolean>;
    defaultMessage(args: ValidationArguments): string;
}
export {};
