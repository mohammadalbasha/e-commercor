import mongoose from 'mongoose';
import { CreateOrderDto } from '../dtos/create-order.dto';
import { Order, OrderDocument } from '../models/order.model';
export declare class OrderRepository {
    private readonly order;
    constructor(order: mongoose.Model<Order & OrderDocument>);
    create(data: CreateOrderDto, session: any): Promise<(mongoose.Document<unknown, {}, Order & Document> & Omit<Order & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>)[]>;
}
