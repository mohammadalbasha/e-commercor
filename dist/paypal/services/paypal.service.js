"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PaypalService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const node_fetch_1 = require("node-fetch");
const store_service_1 = require("../../store/services/store.service");
let PaypalService = class PaypalService {
    get clientIdAndSecret() {
        const paypalConfig = this.configService.get('paypal');
        const clientId = paypalConfig.clientId;
        const clientSecret = paypalConfig.clientSecret;
        return `${clientId}:${clientSecret}`;
    }
    constructor(configService, storeService) {
        this.configService = configService;
        this.storeService = storeService;
    }
    async getAuthToken() {
        const authUrl = 'https://api-m.sandbox.paypal.com/v1/oauth2/token';
        const base64 = Buffer.from(this.clientIdAndSecret).toString('base64');
        const response = await (0, node_fetch_1.default)(authUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                Accept: 'application/json',
                'Accept-Language': 'en_US',
                Authorization: `Basic ${base64}`,
            },
            body: 'grant_type=client_credentials',
        });
        const data = await response.json();
        return data;
    }
    async setupMerchant(storeId, storeLogo = 'https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg') {
        let authData = await this.getAuthToken();
        const accessToken = authData.access_token;
        const response = await (0, node_fetch_1.default)(`https://api-m.sandbox.paypal.com/v2/customer/partner-referrals`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
                'PayPal-Partner-Attribution-Id': 'FLAVORsb-lwvbv25313809_MP',
            },
            body: JSON.stringify({
                tracking_id: storeId,
                partner_config_override: {
                    partner_logo_url: storeLogo,
                    return_url: 'https://e-commercor-git-main-mohammadalbasha.vercel.app/seller/paypal/setup-merchant-success-callback',
                    return_url_description: 'the url to return the merchant after the paypal onboarding process.',
                    action_renewal_url: 'https://testenterprises.com/renew-exprired-url',
                },
                rest_endpoint_feature: 'PARTNER_FEE',
                third_party_details: {
                    features: [
                        {
                            rest_endpoint_feature: 'PARTNER_FEE',
                        },
                        {
                            rest_endpoint_feature: 'REFUND',
                        },
                        {
                            rest_endpoint_feature: 'refund',
                        },
                        {
                            rest_endpoint_feature: 'PAYMENT',
                        },
                    ],
                },
                operations: [
                    {
                        operation: 'API_INTEGRATION',
                        api_integration_preference: {
                            rest_api_integration: {
                                integration_method: 'PAYPAL',
                                integration_type: 'THIRD_PARTY',
                                third_party_details: {
                                    features: ['PAYMENT', 'REFUND'],
                                },
                            },
                        },
                    },
                ],
                products: ['EXPRESS_CHECKOUT'],
                legal_consents: [
                    {
                        type: 'SHARE_DATA_CONSENT',
                        granted: true,
                    },
                ],
            }),
        });
        const data = await response.json();
        return data;
    }
    async setMerchantId(storeId, merchantId) {
        await this.storeService.findByIdAndUpdate(storeId, {
            paypalMerchantId: merchantId,
        });
        return 'merchantId was setted successfully';
    }
    async createOrder(storeMerchantId, amount, storeName = 'ecommercor', storeId, orderId) {
        let fee = amount * 0.05;
        amount -= amount * 0.05;
        let authData = await this.getAuthToken();
        const accessToken = authData.access_token;
        console.log(accessToken);
        const response = await (0, node_fetch_1.default)('https://api-m.sandbox.paypal.com/v2/checkout/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
                'PayPal-Request-Id': '7b92603e-77ed-4896-8e78-5dea2050476a',
            },
            body: JSON.stringify({
                intent: 'CAPTURE',
                purchase_units: [
                    {
                        reference_id: 'REFID-1',
                        payee: {
                            merchant_id: storeMerchantId,
                        },
                        amount: {
                            currency_code: 'USD',
                            value: amount,
                        },
                        payment_instruction: {
                            disbursement_mode: 'INSTANT',
                            platform_fees: [
                                {
                                    amount: {
                                        currency_code: 'USD',
                                        value: fee,
                                    },
                                },
                            ],
                        },
                    },
                ],
                payment_source: {
                    paypal: {
                        experience_context: {
                            payment_method_preference: 'IMMEDIATE_PAYMENT_REQUIRED',
                            payment_method_selected: 'PAYPAL',
                            brand_name: storeName,
                            locale: 'en-US',
                            landing_page: 'LOGIN',
                            user_action: 'PAY_NOW',
                            return_url: `https://e-commercor-git-main-mohammadalbasha.vercel.app/${storeId}/order/capture/${orderId}`,
                            cancel_url: `https://e-commercor-git-main-mohammadalbasha.vercel.app/${storeId}/order/capture/cancel/${orderId}`,
                        },
                    },
                },
            }),
        });
        const data = await response.json();
        return data;
    }
    async captureOrder(orderId) {
        let authData = await this.getAuthToken();
        const accessToken = authData.access_token;
        const response = await (0, node_fetch_1.default)(`https://api.sandbox.paypal.com/v2/checkout/orders/${orderId}/capture`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${accessToken}`,
            },
        });
        const data = response.json();
        return data;
    }
};
PaypalService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [config_1.ConfigService,
        store_service_1.StoreService])
], PaypalService);
exports.PaypalService = PaypalService;
//# sourceMappingURL=paypal.service.js.map