import { Body, Controller, Param, Post } from '@nestjs/common';
import { SignupDto } from 'src/customer/dtos/signup.dto';
import { CustomerService } from '../services/customer.service';

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
}
