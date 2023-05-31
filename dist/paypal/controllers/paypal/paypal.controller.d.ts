import { PaypalService } from 'src/paypal/services/paypal.service';
export declare class PaypalController {
    private paypalService;
    constructor(paypalService: PaypalService);
    setupMerchant(storeId: any): Promise<any>;
    setupMerchantSuccessCallback(query: any): Promise<string>;
}
