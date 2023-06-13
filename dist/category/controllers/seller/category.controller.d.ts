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
import { CreateCategoryDto } from 'src/category/dtos/create-category.dto';
import { CategoryService } from 'src/category/services/category.service';
export declare class CategorySellerController {
    private categoryService;
    constructor(categoryService: CategoryService);
    create(data: CreateCategoryDto, storeId: string): Promise<string>;
    list(storeId: string): Promise<(import("mongoose").Document<unknown, {}, import("../../models/category.model").Category & Document> & Omit<import("../../models/category.model").Category & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[]>;
    listOne(categoryId: any): Promise<import("mongoose").Document<unknown, {}, import("../../models/category.model").Category & Document> & Omit<import("../../models/category.model").Category & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
}
