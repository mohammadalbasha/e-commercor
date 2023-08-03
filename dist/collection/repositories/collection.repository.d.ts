import mongoose from 'mongoose';
import { CreateCollectionDto } from '../dtos/create-collection.dto';
import { Collection, CollectionDocument } from '../models/collection.model';
export declare class CollectionRepository {
    private readonly collection;
    constructor(collection: mongoose.Model<Collection & CollectionDocument>);
    create(data: CreateCollectionDto): Promise<mongoose.Document<unknown, {}, Collection & Document> & Omit<Collection & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>>;
    deleteOne(collectionId: string): Promise<mongoose.mongo.DeleteResult>;
    addProductToCollection(collectionId: string, productId: string): Promise<mongoose.Document<unknown, {}, Collection & Document> & Omit<Collection & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>>;
    removeProductFromCollection(collectionId: string, productId: string): Promise<mongoose.Document<unknown, {}, Collection & Document> & Omit<Collection & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>>;
    findById(collectionId: string): Promise<mongoose.Document<unknown, {}, Collection & Document> & Omit<Collection & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>>;
    findByStoreId(storeId: string): Promise<Omit<mongoose.Document<unknown, {}, Collection & Document> & Omit<Collection & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>, never>[]>;
    findOne(filter: Partial<Collection>): Promise<mongoose.Document<unknown, {}, Collection & Document> & Omit<Collection & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>>;
}
