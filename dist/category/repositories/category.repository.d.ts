import mongoose from 'mongoose';
import { CreateCategoryDto } from '../dtos/create-category.dto';
import { Category, CategoryDocument } from '../models/category.model';
export declare class CategoryRepository {
    private readonly category;
    constructor(category: mongoose.Model<Category & CategoryDocument>);
    create(data: CreateCategoryDto): Promise<mongoose.Document<unknown, {}, Category & Document> & Omit<Category & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>>;
    findById(categoryId: string): Promise<mongoose.Document<unknown, {}, Category & Document> & Omit<Category & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>>;
    findByStoreId(storeId: string): Promise<(mongoose.Document<unknown, {}, Category & Document> & Omit<Category & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>)[]>;
    findAll(filter: Partial<Category>): mongoose.Query<(mongoose.Document<unknown, {}, Category & Document> & Omit<Category & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>)[], mongoose.Document<unknown, {}, Category & Document> & Omit<Category & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>, {}, Category & Document>;
    findOne(filter: Partial<Category>): mongoose.Query<mongoose.Document<unknown, {}, Category & Document> & Omit<Category & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>, mongoose.Document<unknown, {}, Category & Document> & Omit<Category & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>, {}, Category & Document>;
}
