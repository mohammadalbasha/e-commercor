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
import { AddProductToCollectionDto } from 'src/collection/dtos/add-product.dto';
import { CreateCollectionDto } from 'src/collection/dtos/create-collection.dto';
import { CollectionService } from 'src/collection/services/collection.service';
export declare class CollectionSellerController {
    private collectionService;
    constructor(collectionService: CollectionService);
    create(data: CreateCollectionDto, storeId: string): Promise<string>;
    delete(storeId: string, collectionId: any): Promise<string>;
    addProductToCollection(data: AddProductToCollectionDto, storeId: string, collectionId: any): Promise<string>;
    removeProductFromCollection(data: AddProductToCollectionDto, storeId: string, collectionId: any): Promise<string>;
    list(storeId: string): Promise<Omit<import("mongoose").Document<unknown, {}, import("../../models/collection.model").Collection & Document> & Omit<import("../../models/collection.model").Collection & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, never>[]>;
    listOne(collectionId: any, storeId: string): Promise<import("mongoose").Document<unknown, {}, import("../../models/collection.model").Collection & Document> & Omit<import("../../models/collection.model").Collection & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
}
