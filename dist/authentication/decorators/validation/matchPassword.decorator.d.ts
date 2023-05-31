import { ValidationArguments, ValidatorConstraintInterface, ValidationOptions } from 'class-validator';
interface MatchPasswordValidationArguments extends ValidationArguments {
    constraints: [];
}
export declare class MatchPassword implements ValidatorConstraintInterface {
    validate<E>(value: string, args: MatchPasswordValidationArguments): Promise<boolean>;
    defaultMessage(args: ValidationArguments): string;
}
export declare function IsMatch(constraints: MatchPasswordValidationArguments['constraints'], validationOptions?: ValidationOptions): (object: Object, propertyName: string) => void;
export {};
