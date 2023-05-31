import { BaseModel } from 'src/shared/models/base.model';
export declare function PropRef(Model: typeof BaseModel, isArray?: boolean): PropertyDecorator;
export declare function PropObject(Model: typeof BaseModel, isArray?: boolean, foreignField?: string): PropertyDecorator;
export declare function getMongooseVirtuals(Model: any): any;
