import { CreateOrderDto } from '../dtos/create-order.dto';
import { OrderService } from '../services/order.service';
import { Store } from 'src/store/models/store.model';
export declare class OrderController {
    private readonly orderService;
    constructor(orderService: OrderService);
    creataOrder(data: Omit<CreateOrderDto, 'userId' | 'storeId'>, store: Store, user: any): Promise<any>;
    captureOrder(storeId: string, orderId: string, token: string): Promise<any>;
}
