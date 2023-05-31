import mongoose from 'mongoose';
import { BaseModel } from 'src/shared/models/base.model';
import { Store } from 'src/store/models/store.model';
export declare class Address extends BaseModel {
    country: string;
    city: string;
    state: string;
    street: string;
    fullAddress: string;
    buildingNumber: number;
    lat: number;
    lan: number;
}
export declare class Customer extends BaseModel {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    phoneNumber: string;
    address: Address;
    ssn: string;
    nationality: string;
    storeId?: string;
    store?: Store;
}
export type CustomerDocument = Customer & Document;
export declare const CustomerSchema: mongoose.Schema<Customer, mongoose.Model<Customer, any, any, any, mongoose.Document<unknown, any, Customer> & Omit<Customer & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Customer, mongoose.Document<unknown, {}, mongoose.FlatRecord<Customer>> & Omit<mongoose.FlatRecord<Customer> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
