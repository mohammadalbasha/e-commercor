import { ValidationArguments, ValidatorConstraintInterface, ValidationOptions } from 'class-validator';
import { Connection } from 'mongoose';
import { BaseModel } from '../models/base.model';
interface IsRefValidationArguments extends ValidationArguments {
    constraints: [
        typeof BaseModel,
        Object
    ];
}
export declare class IsRef implements ValidatorConstraintInterface {
    private connection;
    constructor(connection: Connection);
    validate(value: string | Array<string>, args: IsRefValidationArguments): Promise<boolean>;
    defaultMessage(args: ValidationArguments): string;
}
export declare function IsRef2(constraints: IsRefValidationArguments['constraints'] | [typeof BaseModel] | typeof BaseModel, validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
export {};
