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
import { CreateOrderDto } from '../../dtos/create-order.dto';
import { OrderService } from '../../services/order.service';
import { Store } from 'src/store/models/store.model';
export declare class OrderCustomerController {
    private readonly orderService;
    constructor(orderService: OrderService);
    creataOrder(data: Omit<CreateOrderDto, 'userId' | 'storeId'>, store: Store, user: any): Promise<any>;
    listMyOrders(userId: string): import("mongoose").Query<(import("mongoose").Document<unknown, {}, import("../../models/order.model").Order & Document> & Omit<import("../../models/order.model").Order & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>)[], import("mongoose").Document<unknown, {}, import("../../models/order.model").Order & Document> & Omit<import("../../models/order.model").Order & Document & {
        _id: import("mongoose").Types.ObjectId;
    }, never>, {}, import("../../models/order.model").Order & Document>;
    captureOrder(storeId: string, orderId: string, token: string): Promise<any>;
    cancelOrder(storeId: string, orderId: string, token: string): Promise<void>;
}
