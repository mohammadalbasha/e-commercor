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
import { CreateStoreDto } from '../dtos/create-store.dto';
import { StoreRepository } from '../repositories/store.repository';
import { PasswordService } from 'src/authentication/password.service';
import { Seller, Store } from '../models/store.model';
import { MarketDto } from '../dtos/market-store.dto';
export declare class StoreService {
    private storeRepo;
    private passwordService;
    constructor(storeRepo: StoreRepository, passwordService: PasswordService);
    create(input: CreateStoreDto): Promise<import("mongoose").Document<unknown, {}, Store & Document> & Omit<Store & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    findBySellerId(sellerId: string): Promise<import("mongoose").Document<unknown, {}, Store & Document> & Omit<Store & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    convertFilters(filters: any): {};
    findAll(filter: Partial<Store>, page: any, limit: any): Promise<{
        items: (import("mongoose").Document<unknown, {}, Store & Document> & Omit<Store & Document & {
            _id: import("mongoose").Types.ObjectId;
        }, never>)[];
        totalPages: number;
        currentPage: number;
        totalItems: number;
    }>;
    findUnReadStores(): Promise<number>;
    findOne(filter: Partial<Store>): import("mongoose").Query<import("mongoose").Document<unknown, {}, Store & Document> & Omit<Store & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, import("mongoose").Document<unknown, {}, Store & Document> & Omit<Store & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, {}, Store & Document>;
    findById(storeId: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, Store & Document> & Omit<Store & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, import("mongoose").Document<unknown, {}, Store & Document> & Omit<Store & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, {}, Store & Document>;
    findByName(storeName: string): Promise<import("mongoose").Document<unknown, {}, Store & Document> & Omit<Store & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    findByIdAndUpdate(storeId: string, data: Partial<Store>): import("mongoose").Query<import("mongoose").Document<unknown, {}, Store & Document> & Omit<Store & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, import("mongoose").Document<unknown, {}, Store & Document> & Omit<Store & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, {}, Store & Document>;
    findSeller(filter: Partial<Seller>): Promise<Seller>;
    findSellerById(sellerId: string): Promise<Seller>;
    findSellerByEmail(email: string): Promise<Seller>;
    findSellerAndUpdate(filter: Partial<Seller>, data: Partial<Seller>): Promise<void>;
    findSellerByIdAndUpdate(sellerId: string, data: Partial<Seller>): Promise<import("mongodb").UpdateResult>;
    addLandingPage(sellerId: any, data: any): import("mongoose").Query<import("mongoose").Document<unknown, {}, Store & Document> & Omit<Store & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, import("mongoose").Document<unknown, {}, Store & Document> & Omit<Store & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, {}, Store & Document>;
    addMarketPlace(sellerId: any, data: MarketDto): import("mongoose").Query<import("mongoose").Document<unknown, {}, Store & Document> & Omit<Store & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, import("mongoose").Document<unknown, {}, Store & Document> & Omit<Store & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, {}, Store & Document>;
}
