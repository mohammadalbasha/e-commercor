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
import { StoreService } from '../../services/store.service';
import { Store } from '../../models/store.model';
import { ActivateStoreDto } from 'src/store/dtos/active-store-dto';
export declare class StoreAdminController {
    private storeService;
    constructor(storeService: StoreService);
    getStore(requestQuery: any): Promise<{
        items: (import("mongoose").Document<unknown, {}, Store & Document> & Omit<Store & Document & {
            _id: import("mongoose").Types.ObjectId;
        }, never>)[];
        totalPages: number;
        currentPage: number;
        totalItems: number;
    }>;
    getStoreCreationRequests(requestQuery: any): Promise<{
        items: (import("mongoose").Document<unknown, {}, Store & Document> & Omit<Store & Document & {
            _id: import("mongoose").Types.ObjectId;
        }, never>)[];
        totalPages: number;
        currentPage: number;
        totalItems: number;
    }>;
    getStoreMarketRequests(requestQuery: any): Promise<{
        items: (import("mongoose").Document<unknown, {}, Store & Document> & Omit<Store & Document & {
            _id: import("mongoose").Types.ObjectId;
        }, never>)[];
        totalPages: number;
        currentPage: number;
        totalItems: number;
    }>;
    getUnReadCounts(): Promise<number>;
    getById(storeId: string): Promise<import("mongoose").Document<unknown, {}, Store & Document> & Omit<Store & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    acceptCreation(data: ActivateStoreDto): Promise<import("mongoose").Document<unknown, {}, Store & Document> & Omit<Store & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    acceptMarket(data: ActivateStoreDto): Promise<import("mongoose").Document<unknown, {}, Store & Document> & Omit<Store & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    activate(data: ActivateStoreDto): Promise<import("mongoose").Document<unknown, {}, Store & Document> & Omit<Store & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    deActivate(data: ActivateStoreDto): Promise<void>;
}
