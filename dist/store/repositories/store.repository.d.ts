import { Seller, Store, StoreDocument } from '../models/store.model';
import mongoose from 'mongoose';
import { CreateStoreDto } from '../dtos/create-store.dto';
export declare class StoreRepository {
    private readonly store;
    protected connection: mongoose.Connection;
    constructor(store: mongoose.Model<Store & StoreDocument>, connection: mongoose.Connection);
    create(input: Omit<CreateStoreDto, 'seller'> & {
        seller: {
            name: string;
            password: string;
        };
    }): Promise<mongoose.Document<unknown, {}, Store & Document> & Omit<Store & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>>;
    findAll(filter: Partial<Store>): mongoose.Query<(mongoose.Document<unknown, {}, Store & Document> & Omit<Store & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>)[], mongoose.Document<unknown, {}, Store & Document> & Omit<Store & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>, {}, Store & Document>;
    findOne(filter: Partial<Store>): mongoose.Query<mongoose.Document<unknown, {}, Store & Document> & Omit<Store & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>, mongoose.Document<unknown, {}, Store & Document> & Omit<Store & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>, {}, Store & Document>;
    findById(storeId: string): mongoose.Query<mongoose.Document<unknown, {}, Store & Document> & Omit<Store & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>, mongoose.Document<unknown, {}, Store & Document> & Omit<Store & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>, {}, Store & Document>;
    findByIdAndUpdate(storeId: string, data: Partial<Store>): mongoose.Query<mongoose.Document<unknown, {}, Store & Document> & Omit<Store & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>, mongoose.Document<unknown, {}, Store & Document> & Omit<Store & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>, {}, Store & Document>;
    findBySellerId(sellerId: string): Promise<mongoose.Document<unknown, {}, Store & Document> & Omit<Store & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>>;
    findSeller(filter: Partial<Seller>): Promise<Seller>;
    findSellerById(sellerId: string): Promise<Seller>;
    findSellerByEmail(email: string): Promise<Seller>;
    findSellerAndUpdate(filter: Partial<Seller>, data: Partial<Seller>): Promise<void>;
    findSellerByIdAndUpdate(sellerId: string, data: Partial<Seller>): Promise<mongoose.mongo.UpdateResult>;
}
