import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Param,
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

@Controller()
export class StoreCustomerController {
  constructor(private storeService: StoreService) {}

  @UseInterceptors(MongooseClassSerializerInterceptor(Store))
  @Get('/:storeName')
  getStore(@Param('storeName') storeName: string) {
    return this.storeService.findByName(storeName);
  }
}
