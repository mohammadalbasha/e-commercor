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
import { ProductRepository } from '../repositories/product.repository';
import { CreateProductDto } from '../dtos/create-product.dto';
import { CategoryService } from 'src/category/services/category.service';
export declare class ProductService {
    private productRepo;
    private categroyService;
    constructor(productRepo: ProductRepository, categroyService: CategoryService);
    validateProductData(productProperties: any, data: CreateProductDto): void;
    create(data: CreateProductDto): Promise<import("mongoose").Document<unknown, {}, import("../models/product.model").Product & Document> & Omit<import("../models/product.model").Product & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    increamentCount(filter: {
        productId: string;
        version: number;
    }, session: any): Promise<import("mongoose").Document<unknown, {}, import("../models/product.model").Product & Document> & Omit<import("../models/product.model").Product & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    decreamentCount(filter: {
        productId: string;
        version: number;
    }, session: any): Promise<import("mongoose").Document<unknown, {}, import("../models/product.model").Product & Document> & Omit<import("../models/product.model").Product & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    findById(productId: string, session?: any): Promise<import("mongoose").Document<unknown, {}, import("../models/product.model").Product & Document> & Omit<import("../models/product.model").Product & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
}
