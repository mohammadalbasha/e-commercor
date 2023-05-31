import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CreateOrderDto } from '../dtos/create-order.dto';
import { OrderService } from '../services/order.service';
import { GetCurrentStore } from 'src/shared/current-store/current-store.decorator';
import { Store } from 'src/store/models/store.model';
import { GetCurrentUser, Public } from 'src/authentication/decorators';
import { User } from 'src/authorization/casl/user.model';
import { AtCustomerGuard } from 'src/authentication/customers/guards';

@UseGuards(AtCustomerGuard)
@Controller('')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Post(':storeId/order')
  creataOrder(
    @Body() data: Omit<CreateOrderDto, 'userId' | 'storeId'>,
    @GetCurrentStore() store: Store,
    @GetCurrentUser() user: any,
  ) {
    data = {
      ...data,
      storeId: store.id,
      customerId: user.sub,
    } as CreateOrderDto;
    return this.orderService.purchaseProduct(data as CreateOrderDto, store);
  }

  @Public()
  @Get('/:storeId/:orderId')
  captureOrder(
    @Param('storeId') storeId: string,
    @Param('orderId') orderId: string,
    @Query('token') token: string,
  ) {
    return this.orderService.captureOrder(storeId, orderId, token);
  }
}
