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
import { Category } from 'src/category/models/category.model';
import { BaseModel } from 'src/shared/models/base.model';
import { Store } from 'src/store/models/store.model';
export declare class Product extends BaseModel {
    name: string;
    price: number;
    count: number;
    imagesIds: string[];
    storeId: string;
    store: Store;
    categoryId: string;
    category: Category;
    version: number;
}
export type ProductDocument = Product & Document;
export declare const ProductSchema: import("mongoose").Schema<Product, import("mongoose").Model<Product, any, any, any, import("mongoose").Document<unknown, any, Product> & Omit<Product & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Product, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Product>> & Omit<import("mongoose").FlatRecord<Product> & {
    _id: import("mongoose").Types.ObjectId;
}, never>>;
