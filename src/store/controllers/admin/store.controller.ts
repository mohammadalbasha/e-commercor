import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Put,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { StoreService } from '../../services/store.service';
import MongooseClassSerializerInterceptor from 'src/shared/mongoose/interceptors/mongooseClassSerializer.interceptor';
import { Store } from '../../models/store.model';
import { ActivateStoreDto } from 'src/store/dtos/active-store-dto';
import { AtAdminGuard } from 'src/authentication/customers copy/guards';

@UseGuards(AtAdminGuard)
@Controller('admin/stores')
export class StoreAdminController {
  constructor(private storeService: StoreService) {}

  @UseInterceptors(MongooseClassSerializerInterceptor(Store))
  @Get('/')
  getStore() {
    return this.storeService.findAll({});
  }

  @UseInterceptors(MongooseClassSerializerInterceptor(Store))
  @Get('/creation-requests')
  getStoreCreationRequests() {
    return this.storeService.findAll({ isAccepted: false });
  }

  @UseInterceptors(MongooseClassSerializerInterceptor(Store))
  @Get('/market-requests')
  getStoreMarketRequests() {
    return this.storeService.findAll({ isVerifiedAsMarket: false });
  }

  @UseInterceptors(MongooseClassSerializerInterceptor(Store))
  @Put('accept-creation')
  async acceptCreation(@Body() data: ActivateStoreDto) {
    return this.storeService.findByIdAndUpdate(data.storeId, {
      isAccepted: true,
    });
  }

  @UseInterceptors(MongooseClassSerializerInterceptor(Store))
  @Put('accept-market')
  async acceptMarket(@Body() data: ActivateStoreDto) {
    return this.storeService.findByIdAndUpdate(data.storeId, {
      isVerifiedAsMarket: true,
    });
  }

  @UseInterceptors(MongooseClassSerializerInterceptor(Store))
  @Put('/activate')
  async activate(@Body() data: ActivateStoreDto) {
    return this.storeService.findByIdAndUpdate(data.storeId, {
      isActive: true,
    });
  }

  @UseInterceptors(MongooseClassSerializerInterceptor(Store))
  @Put('/deactivate')
  async deActivate(@Body() data: ActivateStoreDto) {
    // TODO:
    // check orders
    await this.storeService.findByIdAndUpdate(data.storeId, {
      isActive: false,
    });
  }
}
