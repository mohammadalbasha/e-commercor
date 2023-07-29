import mongoose from 'mongoose';
import { CreateOrderDto } from '../dtos/create-order.dto';
import { Order, OrderDocument } from '../models/order.model';
export declare class OrderRepository {
    private readonly order;
    constructor(order: mongoose.Model<Order & OrderDocument>);
    create(data: CreateOrderDto, session: any): Promise<(mongoose.Document<unknown, {}, Order & Document> & Omit<Order & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>)[]>;
    updateOne(filter: Partial<Order>, data: Partial<Order>): mongoose.Query<mongoose.mongo.UpdateResult, mongoose.Document<unknown, {}, Order & Document> & Omit<Order & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>, {}, Order & Document>;
    findById(id: string): mongoose.Query<mongoose.Document<unknown, {}, Order & Document> & Omit<Order & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>, mongoose.Document<unknown, {}, Order & Document> & Omit<Order & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>, {}, Order & Document>;
    listByStore(storeId: string): mongoose.Query<(mongoose.Document<unknown, {}, Order & Document> & Omit<Order & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>)[], mongoose.Document<unknown, {}, Order & Document> & Omit<Order & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>, {}, Order & Document>;
    listByUser(userId: string): mongoose.Query<(mongoose.Document<unknown, {}, Order & Document> & Omit<Order & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>)[], mongoose.Document<unknown, {}, Order & Document> & Omit<Order & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>, {}, Order & Document>;
}
