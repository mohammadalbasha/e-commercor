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
import { CreateCollectionDto } from 'src/collection/dtos/create-collection.dto';
import { CollectionRepository } from 'src/collection/repositories/collection.repository';
import { AddProductToCollectionDto } from '../dtos/add-product.dto';
import { ProductService } from 'src/product/services/product.service';
export declare class CollectionService {
    private collectionRepo;
    private prodcutService;
    constructor(collectionRepo: CollectionRepository, prodcutService: ProductService);
    create(data: CreateCollectionDto): Promise<import("mongoose").Document<unknown, {}, import("../models/collection.model").Collection & Document> & Omit<import("../models/collection.model").Collection & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    deleteCollection(collectionId: string, storeId: string): Promise<import("mongoose").Document<unknown, {}, import("../models/collection.model").Collection & Document> & Omit<import("../models/collection.model").Collection & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    addProductToCollection(data: AddProductToCollectionDto): Promise<import("mongoose").Document<unknown, {}, import("../models/collection.model").Collection & Document> & Omit<import("../models/collection.model").Collection & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    removeProductFromCollection(data: AddProductToCollectionDto): Promise<import("mongoose").Document<unknown, {}, import("../models/collection.model").Collection & Document> & Omit<import("../models/collection.model").Collection & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    findById(collectionId: string, storeId: string): Promise<import("mongoose").Document<unknown, {}, import("../models/collection.model").Collection & Document> & Omit<import("../models/collection.model").Collection & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    findByStoreId(storeId: string): Promise<Omit<import("mongoose").Document<unknown, {}, import("../models/collection.model").Collection & Document> & Omit<import("../models/collection.model").Collection & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, never>[]>;
}
