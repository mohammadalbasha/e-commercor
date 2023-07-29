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
import {
  GetCurrentUser,
  GetCurrentUserId,
  Public,
} from 'src/authentication/decorators';
import { User } from 'src/authorization/casl/user.model';
import { AtCustomerGuard } from 'src/authentication/customers/guards';

@UseGuards(AtCustomerGuard)
@Controller(':storeId/order')
export class OrderCustomerController {
  constructor(private readonly orderService: OrderService) {}

  @Post()
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

  @Get()
  listMyOrders(@GetCurrentUserId() userId: string) {
    return this.orderService.listOrdersByUser(userId);
  }

  // TODO:
  // refactor this path
  @Public()
  @Get('/capture/:orderId')
  captureOrder(
    @Param('storeId') storeId: string,
    @Param('orderId') orderId: string,
    @Query('token') token: string,
  ) {
    return this.orderService.captureOrder(storeId, orderId, token);
  }

  @Public()
  @Get('/capture/cancel/:orderId')
  cancelOrder(
    @Param('storeId') storeId: string,
    @Param('orderId') orderId: string,
    @Query('token') token: string,
  ) {
    return this.orderService.cancelOrder(storeId, orderId);
  }
}
