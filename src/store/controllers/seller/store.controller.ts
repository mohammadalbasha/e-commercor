import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Post,
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
}
