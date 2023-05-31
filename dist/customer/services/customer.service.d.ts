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
import { PasswordService } from 'src/authentication/password.service';
import { SignupData } from 'src/customer/dtos/signup.dto';
import { CustomerRepository } from 'src/customer/repositories/customer.repository';
export declare class CustomerService {
    private customerRepo;
    private passwordSerivce;
    constructor(customerRepo: CustomerRepository, passwordSerivce: PasswordService);
    signup(data: SignupData): Promise<import("mongoose").Document<unknown, {}, import("../models/customer.model").Customer & Document> & Omit<import("../models/customer.model").Customer & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    findById(customerId: string): Promise<import("mongoose").Document<unknown, {}, import("../models/customer.model").Customer & Document> & Omit<import("../models/customer.model").Customer & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    findByIdAndStoreId(customerId: string, storeId: string): Promise<import("mongoose").Document<unknown, {}, import("../models/customer.model").Customer & Document> & Omit<import("../models/customer.model").Customer & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
    findByEmailAndStoreId(email: string, storeId: string): Promise<import("mongoose").Document<unknown, {}, import("../models/customer.model").Customer & Document> & Omit<import("../models/customer.model").Customer & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>>;
}
