import mongoose from 'mongoose';
import { Category } from 'src/category/models/category.model';
import { BaseModel } from 'src/shared/models/base.model';
import { Store } from 'src/store/models/store.model';
export declare class Product extends BaseModel {
    name: string;
    price: number;
    count: number;
    Imagesproduct: string;
    isSale: boolean;
    saleValue: number;
    tags: string[];
    storeId: string;
    store: Store;
    categoryId: string;
    category: Category;
    version: number;
}
export type ProductDocument = Product & Document;
export declare var ProductSchema: mongoose.Schema<Product, mongoose.Model<Product, any, any, any, mongoose.Document<unknown, any, Product> & Omit<Product & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Product, mongoose.Document<unknown, {}, mongoose.FlatRecord<Product>> & Omit<mongoose.FlatRecord<Product> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
