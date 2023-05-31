import mongoose from 'mongoose';
import { BaseModel } from 'src/shared/models/base.model';
import { Store } from 'src/store/models/store.model';
export declare class ProductProperties {
    name: string;
    price: string;
    count: string;
}
export declare class Category extends BaseModel {
    name: string;
    description: string;
    isSale: boolean;
    saleValue: number;
    imagesIds: string[];
    storeId: string;
    store: Store;
    productProperties: ProductProperties;
}
export type CategoryDocument = Category & Document;
export declare const CategorySchema: mongoose.Schema<Category, mongoose.Model<Category, any, any, any, mongoose.Document<unknown, any, Category> & Omit<Category & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Category, mongoose.Document<unknown, {}, mongoose.FlatRecord<Category>> & Omit<mongoose.FlatRecord<Category> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
