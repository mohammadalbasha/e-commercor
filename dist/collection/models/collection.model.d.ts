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
import { Product } from 'src/product/models/product.model';
import { BaseModel } from 'src/shared/models/base.model';
import { Store } from 'src/store/models/store.model';
export declare class Collection extends BaseModel {
    name: string;
    description: string;
    storeId: string;
    store: Store;
    productsId: string[];
    products: Product[];
    isSale: boolean;
    saleValue: number;
}
export type CollectionDocument = Collection & Document;
export declare const CollectionSchema: import("mongoose").Schema<Collection, import("mongoose").Model<Collection, any, any, any, import("mongoose").Document<unknown, any, Collection> & Omit<Collection & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Collection, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Collection>> & Omit<import("mongoose").FlatRecord<Collection> & {
    _id: import("mongoose").Types.ObjectId;
}, never>>;
