import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PaypalConfig } from 'src/shared/configs/config.interface';
import fetch from 'node-fetch';
import { StoreService } from 'src/store/services/store.service';

@Injectable()
export class PaypalService {
  get clientIdAndSecret(): string {
    const paypalConfig = this.configService.get<PaypalConfig>('paypal');
    const clientId = paypalConfig.clientId;
    const clientSecret = paypalConfig.clientSecret;
    return `${clientId}:${clientSecret}`;
  }

  constructor(
    private configService: ConfigService,
    private storeService: StoreService,
  ) {}

  async getAuthToken(): Promise<any> {
    const authUrl = 'https://api-m.sandbox.paypal.com/v1/oauth2/token';
    const base64 = Buffer.from(this.clientIdAndSecret).toString('base64');

    const response = await fetch(authUrl, {
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

  async setupMerchant(
    storeId: string,
    storeLogo = 'https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg',
  ) {
    let authData = await this.getAuthToken();

    const accessToken = authData.access_token;

    const response = await fetch(
      `https://api-m.sandbox.paypal.com/v2/customer/partner-referrals`,
      {
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
            return_url:
              'http://localhost:3000/seller/paypal/setup-merchant-success-callback',

            return_url_description:
              'the url to return the merchant after the paypal onboarding process.',

            action_renewal_url:
              'https://testenterprises.com/renew-exprired-url',
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
      },
    );

    const data = await response.json();
    return data;
  }

  async setMerchantId(storeId: string, merchantId: string) {
    await this.storeService.findByIdAndUpdate(storeId, {
      paypalMerchantId: merchantId,
    });
    return 'merchantId was setted successfully';
  }

  async createOrder(
    storeMerchantId: string,
    amount: number,
    storeName: string = 'ecommercor',
    storeId: string,
    orderId: string,
  ) {
    // TODO:
    // recalculate amount
    // 1- paypal fee
    // 2- ecommercor fee
    // 3- product price
    let fee: number = amount * 0.05;
    amount -= amount * 0.05;
    // change amount to string
    // body should be  amount : "100.00"
    // I have removed payee from req.body

    //  "merchant_id": "EYXJDH3F85Y9Q",
    // "email_address": "sb-lwvbv25313809@business.example.com"

    // merchany-id = "8B9TM3M3Y5RME"
    // sb-0o2ux25362533@business.example.com
    // Eu-1nQjm

    // store
    // sb-lwvbv25313809@business.example.com
    // <D7wwW0<

    // business payee // payer
    //sb-47g6pp25045531@business.example.com
    // sb-47g6pp25045531@business.example.com

    // personal pqyer
    // sb-ll1pw25045533@personal.example.com
    // 7!E^7)lS

    // business reciever
    // sb-7n2mx25052199@business.example.com
    // iF.bltM6

    // business reciever
    // sb-ygrgs25045467@business.example.com
    //  G1f}m%Y2

    // business reciever
    // sb-zphzw25366584@business.example.com
    // w&'hP8HV

    let authData = await this.getAuthToken();
    const accessToken = authData.access_token;
    console.log(accessToken);

    const response = await fetch(
      'https://api-m.sandbox.paypal.com/v2/checkout/orders',
      {
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

                return_url: `http://localhost:3000/${storeId}/order/capture/${orderId}`,

                cancel_url: `http://localhost:3000/${storeId}/order/capture/cancel/${orderId}`,
              },
            },
          },
        }),
      },
    );

    //shipping_preference: 'SET_PROVIDED_ADDRESS',

    const data = await response.json();
    return data;
  }

  async captureOrder(orderId: string) {
    let authData = await this.getAuthToken();

    const accessToken = authData.access_token;

    const response = await fetch(
      `https://api.sandbox.paypal.com/v2/checkout/orders/${orderId}/capture`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    const data = response.json();
    return data;
  }
}
