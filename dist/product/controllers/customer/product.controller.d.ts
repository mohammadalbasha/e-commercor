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
import { ProductService } from 'src/product/services/product.service';
export declare class ProductCustomerController {
    private productService;
    constructor(productService: ProductService);
    listAll(categoryId: string, requestQuery: any): Promise<{
        items: (import("mongoose").Document<unknown, {}, import("../../models/product.model").Product & Document> & Omit<import("../../models/product.model").Product & Document & {
            _id: import("mongoose").Types.ObjectId;
        }, never>)[];
        totalPages: number;
        currentPage: any;
        totalItems: number;
    }>;
    listOne(productId: string): Promise<import("mongoose").Document<unknown, {}, import("../../models/product.model").Product & Document> & Omit<import("../../models/product.model").Product & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
}
