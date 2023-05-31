import mongoose from 'mongoose';
import { Customer, CustomerDocument } from '../models/customer.model';
import { SignupData } from '../dtos/signup.dto';
export declare class CustomerRepository {
    private readonly customer;
    protected connection: mongoose.Connection;
    constructor(customer: mongoose.Model<Customer & CustomerDocument>, connection: mongoose.Connection);
    create(data: Omit<SignupData, 'confirmPassword'>): Promise<mongoose.Document<unknown, {}, Customer & Document> & Omit<Customer & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>>;
    findById(customerId: string): Promise<mongoose.Document<unknown, {}, Customer & Document> & Omit<Customer & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>>;
    findByIdAndStoreId(customerId: string, storeId: string): Promise<mongoose.Document<unknown, {}, Customer & Document> & Omit<Customer & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>>;
    findByEmailAndStoreId(email: string, storeId: string): Promise<mongoose.Document<unknown, {}, Customer & Document> & Omit<Customer & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>>;
}
