import { ConfigService } from '@nestjs/config';
import { StoreService } from 'src/store/services/store.service';
export declare class PaypalService {
    private configService;
    private storeService;
    get clientIdAndSecret(): string;
    constructor(configService: ConfigService, storeService: StoreService);
    getAuthToken(): Promise<any>;
    setupMerchant(storeId: string, storeLogo?: string): Promise<any>;
    setMerchantId(storeId: string, merchantId: string): Promise<string>;
    createOrder(storeMerchantId: string, amount: number, storeName: string, storeId: string, orderId: string): Promise<any>;
    captureOrder(orderId: string): Promise<any>;
}
