import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SignupDto } from 'src/customer/dtos/signup.dto';
import { CustomerService } from '../services/customer.service';
import { AtCustomerGuard } from 'src/authentication/customers/guards';
import { GetCurrentUser } from 'src/authentication/decorators';
import { Customer } from '../models/customer.model';

@Controller('/:storeId')
export class CustomerController {
  constructor(private customerService: CustomerService) {}

  @Post('signup')
  signup(@Body() data: SignupDto, @Param('storeId') storeId: string) {
    return this.customerService.signup({
      ...data,
      storeId,
    });
  }

  @UseGuards(AtCustomerGuard)
  @Get('me')
  me(@GetCurrentUser() user: Customer) {}
}
