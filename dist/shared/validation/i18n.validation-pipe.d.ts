import { UnprocessableEntityException, ValidationError, ValidationPipe, ValidationPipeOptions } from '@nestjs/common';
export declare function translateErrors(validationErrors: ValidationError[]): UnprocessableEntityException;
export declare const i18nValidationPip: (options: ValidationPipeOptions) => ValidationPipe;
