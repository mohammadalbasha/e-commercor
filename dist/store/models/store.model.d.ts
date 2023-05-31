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
import { BaseModel } from 'src/shared/models/base.model';
export declare class Seller extends BaseModel {
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    ssn: string;
    nationality: string;
    hashedRefreshToken: string;
}
export declare class Store extends BaseModel {
    name: string;
    paypalMerchantId: string;
    seller: Seller;
    businessType: string;
    description: string;
    country: string;
    isMarket: boolean;
    marketAddress: string;
    marketName: string;
    marketVerifications: string;
}
export type StoreDocument = Store & Document;
export declare const StoreSchema: import("mongoose").Schema<Store, import("mongoose").Model<Store, any, any, any, import("mongoose").Document<unknown, any, Store> & Omit<Store & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Store, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Store>> & Omit<import("mongoose").FlatRecord<Store> & {
    _id: import("mongoose").Types.ObjectId;
}, never>>;
