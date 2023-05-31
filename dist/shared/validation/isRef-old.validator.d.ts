import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
import { Connection } from 'mongoose';
import { BaseModel } from '../models/base.model';
interface IsRefValidationArguments<E> extends ValidationArguments {
    constraints: [typeof BaseModel, Object | null];
}
export declare class IsRef implements ValidatorConstraintInterface {
    private connection;
    constructor(connection: Connection);
    validate<E>(value: string | Array<string>, args: IsRefValidationArguments<E>): Promise<boolean>;
    defaultMessage(args: ValidationArguments): string;
}
export {};
