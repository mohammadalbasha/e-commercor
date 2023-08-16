import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
  Put,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CreateStoreDto } from '../../dtos/create-store.dto';
import { StoreService } from '../../services/store.service';
import { GetCurrentUserId, Public } from 'src/authentication/decorators';
import { AtSellerGuard } from 'src/authentication/sellers/guards';
import { PoliciesGuard } from 'src/authorization/casl/guards/policy.guard';
import MongooseClassSerializerInterceptor from 'src/shared/mongoose/interceptors/mongooseClassSerializer.interceptor';
import { Store } from '../../models/store.model';
import { AuthSellerService } from 'src/authentication/sellers/services/auth-seller.service';
import { MarketDto } from 'src/store/dtos/market-store.dto';
import { AddLogo } from 'src/store/dtos/add-logo.dto';

@UseGuards(AtSellerGuard)
@Controller('/seller/store')
export class StoreSellerController {
  constructor(
    private storeService: StoreService,
    private authService: AuthSellerService,
  ) {}

  @Public()
  @UseInterceptors(MongooseClassSerializerInterceptor(Store))
  @Post()
  async create(@Body() input: CreateStoreDto) {
    const store = await this.storeService.create(input);
    return this.authService.login({
      email: input.seller.email,
      password: input.seller.password,
    });
  }

  @UseInterceptors(MongooseClassSerializerInterceptor(Store))
  @Get()
  getStore(@GetCurrentUserId() sellerId: string) {
    return this.storeService.findBySellerId(sellerId);
  }

  @Post('/landing-page')
  addLandingPage(@Body() body, @GetCurrentUserId() sellerId: string) {
    return this.storeService.addLandingPage(sellerId, body);
  }

  @Put('/market')
  addMarketInformation(
    @Body() body: MarketDto,
    @GetCurrentUserId() sellerId: string,
  ) {
    return this.storeService.addMarketPlace(sellerId, body);
  }

  @Put('/logo')
  addLogo(@Body() body: AddLogo, @GetCurrentUserId() sellerId: string) {
    return this.storeService.addLogo(sellerId, body);
  }

  @Put('/theme')
  addTheme(@Body() body, @GetCurrentUserId() sellerId: string) {
    return this.storeService.addTheme(sellerId, body);
  }
}
