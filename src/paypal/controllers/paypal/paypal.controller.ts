import { Controller, Get, Param, Query, UseGuards } from '@nestjs/common';
import { GetSellerStoreId } from 'src/authentication/decorators/get-seller-store-id.decorator';
import { AtSellerGuard } from 'src/authentication/sellers/guards';
import { PaypalService } from 'src/paypal/services/paypal.service';

// @UseGuards(AtSellerGuard)
@Controller('seller/paypal')
export class PaypalController {
  constructor(private paypalService: PaypalService) {}
  @UseGuards(AtSellerGuard)
  @Get('setup-merchant')
  setupMerchant(@GetSellerStoreId() storeId) {
    return this.paypalService.setupMerchant(storeId);
  }

  @Get('setup-merchant-success-callback')
  setupMerchantSuccessCallback(@Query() query) {
    // merchantId=abc123&merchantIdInPayPal=AAYPWHCBAST7S&permissionsGranted=true&consentStatus=true&productIntentId=addipmt&productIntentID=addipmt&isEmailConfirmed=true&accountStatus=BUSINESS_ACCOUNT
    const { merchantId: storeId, merchantIdInPayPal } = query;
    return this.paypalService.setMerchantId(storeId, merchantIdInPayPal);
  }
}
