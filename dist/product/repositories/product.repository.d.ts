import mongoose from 'mongoose';
import { Product, ProductDocument } from 'src/product/models/product.model';
import { CreateProductDto } from '../dtos/create-product.dto';
import { UpdateProductDto } from '../dtos/update-product.dto';
export declare class ProductRepository {
    private readonly product;
    protected connection: mongoose.Connection;
    constructor(product: mongoose.Model<Product & ProductDocument>, connection: mongoose.Connection);
    create(data: CreateProductDto): Promise<mongoose.Document<unknown, {}, Product & Document> & Omit<Product & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>>;
    findById(productId: string, session?: any): Promise<mongoose.Document<unknown, {}, Product & Document> & Omit<Product & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>>;
    decreamentCount(filter: {
        productId: string;
        version: number;
    }, session: any): Promise<mongoose.Document<unknown, {}, Product & Document> & Omit<Product & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>>;
    inceramentCount(filter: {
        productId: string;
        version: number;
    }, session: any): Promise<mongoose.Document<unknown, {}, Product & Document> & Omit<Product & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>>;
    find(categoryId: any, filters: any, page: any, limit: any): Promise<{
        items: (mongoose.Document<unknown, {}, Product & Document> & Omit<Product & Document & {
            _id: mongoose.Types.ObjectId;
        }, never>)[];
        totalPages: number;
        currentPage: any;
        totalItems: number;
    }>;
    findByIdAndUpdate(id: string, data: UpdateProductDto): mongoose.Query<mongoose.Document<unknown, {}, Product & Document> & Omit<Product & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>, mongoose.Document<unknown, {}, Product & Document> & Omit<Product & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>, {}, Product & Document>;
    findByIdAndDelete(id: string): mongoose.Query<mongoose.Document<unknown, {}, Product & Document> & Omit<Product & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>, mongoose.Document<unknown, {}, Product & Document> & Omit<Product & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>, {}, Product & Document>;
}
