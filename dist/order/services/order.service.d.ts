import mongoose from 'mongoose';
import { ProductService } from 'src/product/services/product.service';
import { CreateOrderDto } from '../dtos/create-order.dto';
import { OrderRepository } from '../repository/order.repository';
import { Order } from '../models/order.model';
import { PaypalService } from 'src/paypal/services/paypal.service';
import { Store } from 'src/store/models/store.model';
export declare class OrderService {
    private readonly connection;
    private productService;
    private orderRepo;
    private paypalService;
    constructor(connection: mongoose.Connection, productService: ProductService, orderRepo: OrderRepository, paypalService: PaypalService);
    purchaseProduct(data: CreateOrderDto, store: Store): Promise<any>;
    listOrdersByStore(storeId: string): mongoose.Query<(mongoose.Document<unknown, {}, Order & Document> & Omit<Order & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>)[], mongoose.Document<unknown, {}, Order & Document> & Omit<Order & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>, {}, Order & Document>;
    listOrdersByUser(userId: string): mongoose.Query<(mongoose.Document<unknown, {}, Order & Document> & Omit<Order & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>)[], mongoose.Document<unknown, {}, Order & Document> & Omit<Order & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>, {}, Order & Document>;
    captureOrder(storeId: string, orderId: string, token: string): Promise<any>;
    cancelOrder(storeId: string, orderId: string): Promise<void>;
}
