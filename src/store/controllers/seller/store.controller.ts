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

@UseGuards(AtSellerGuard)
@Controller('/seller/store')
export class StoreSellerController {
  constructor(private storeService: StoreService) {}

  @Public()
  @UseInterceptors(MongooseClassSerializerInterceptor(Store))
  @Post()
  create(@Body() input: CreateStoreDto) {
    console.log(input);
    return this.storeService.create(input);
  }

  @UseInterceptors(MongooseClassSerializerInterceptor(Store))
  @Get()
  getStore(@GetCurrentUserId() sellerId: string) {
    return this.storeService.findBySellerId(sellerId);
  }
}
