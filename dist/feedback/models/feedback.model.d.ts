/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
import { Customer } from 'src/customer/models/customer.model';
import { Product } from 'src/product/models/product.model';
import { BaseModel } from 'src/shared/models/base.model';
export declare class Feedback extends BaseModel {
    text: string;
    productId: string;
    product: Product;
    customerId: string;
    customer: Customer;
}
export type FeedbackDocument = Feedback & Document;
export declare const FeedbackSchema: import("mongoose").Schema<Feedback, import("mongoose").Model<Feedback, any, any, any, import("mongoose").Document<unknown, any, Feedback> & Omit<Feedback & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Feedback, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Feedback>> & Omit<import("mongoose").FlatRecord<Feedback> & {
    _id: import("mongoose").Types.ObjectId;
}, never>>;
