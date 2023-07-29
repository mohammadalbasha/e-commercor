import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CreateOrderDto } from '../../dtos/create-order.dto';
import { OrderService } from '../../services/order.service';
import { GetCurrentStore } from 'src/shared/current-store/current-store.decorator';
import { Store } from 'src/store/models/store.model';
import { GetCurrentUser, Public } from 'src/authentication/decorators';
import { User } from 'src/authorization/casl/user.model';
import { AtCustomerGuard } from 'src/authentication/customers/guards';
import { AtSellerGuard } from 'src/authentication/sellers/guards';
import { GetSellerStoreId } from 'src/authentication/decorators/get-seller-store-id.decorator';

@UseGuards(AtSellerGuard)
@Controller('seller/order')
export class OrderSellerController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  list(@GetSellerStoreId() storeId: string) {
    return this.orderService.listOrdersByStore(storeId);
  }
}
