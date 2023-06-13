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
import { CreateStoreDto } from '../../dtos/create-store.dto';
import { StoreService } from '../../services/store.service';
import { Store } from '../../models/store.model';
import { AuthSellerService } from 'src/authentication/sellers/services/auth-seller.service';
export declare class StoreSellerController {
    private storeService;
    private authService;
    constructor(storeService: StoreService, authService: AuthSellerService);
    create(input: CreateStoreDto): Promise<import("../../../authentication/types").Tokens>;
    getStore(sellerId: string): Promise<import("mongoose").Document<unknown, {}, Store & Document> & Omit<Store & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    addLandingPage(body: any, sellerId: string): import("mongoose").Query<import("mongoose").Document<unknown, {}, Store & Document> & Omit<Store & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, import("mongoose").Document<unknown, {}, Store & Document> & Omit<Store & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, {}, Store & Document>;
}
