import { ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
import { Connection } from 'mongoose';
import { BaseModel } from '../models/base.model';
interface UniqueValidationArguments<E> extends ValidationArguments {
    constraints: [
        typeof BaseModel,
        string,
        string | null
    ];
}
export declare class Unique implements ValidatorConstraintInterface {
    private connection;
    constructor(connection: Connection);
    validate<E>(value: string, args: UniqueValidationArguments<E>): Promise<boolean>;
    defaultMessage(args: ValidationArguments): string;
}
export {};
