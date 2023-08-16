import mongoose from 'mongoose';
import { BaseModel } from 'src/shared/models/base.model';
export declare class Seller extends BaseModel {
    name: string;
    email: string;
    password: string;
    phoneNumber: string;
    ssn: string;
    nationality: string;
    hashedRefreshToken: string;
}
export declare class Store extends BaseModel {
    name: string;
    paypalMerchantId: string;
    isAccepted: boolean;
    seller: Seller;
    businessType: string;
    description: string;
    logo: string;
    theme: mongoose.Schema.Types.Mixed;
    country: string;
    isMarket: boolean;
    marketAddress: string;
    marketName: string;
    isVerifiedAsMarket: boolean;
    landingPage: mongoose.Schema.Types.Mixed;
    isRead: boolean;
}
export type StoreDocument = Store & Document;
export declare const StoreSchema: mongoose.Schema<Store, mongoose.Model<Store, any, any, any, mongoose.Document<unknown, any, Store> & Omit<Store & {
    _id: mongoose.Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, Store, mongoose.Document<unknown, {}, mongoose.FlatRecord<Store>> & Omit<mongoose.FlatRecord<Store> & {
    _id: mongoose.Types.ObjectId;
}, never>>;
