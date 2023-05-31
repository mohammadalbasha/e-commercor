import { Injectable } from '@nestjs/common';
import { PasswordService } from 'src/authentication/password.service';
import { SignupData } from 'src/customer/dtos/signup.dto';
import { CustomerRepository } from 'src/customer/repositories/customer.repository';

@Injectable()
export class CustomerService {
  constructor(
    private customerRepo: CustomerRepository,
    private passwordSerivce: PasswordService,
  ) {}

  async signup(data: SignupData) {
    const hashedPassword = await this.passwordSerivce.hashPassword(
      data.password,
    );

    return this.customerRepo.create({
      ...data,
      password: hashedPassword,
    });

    // send confirmation email
  }

  async findById(customerId: string) {
    return this.customerRepo.findById(customerId);
  }

  async findByIdAndStoreId(customerId: string, storeId: string) {
    return this.customerRepo.findByIdAndStoreId(customerId, storeId);
  }

  async findByEmailAndStoreId(email: string, storeId: string) {
    return this.customerRepo.findByEmailAndStoreId(email, storeId);
  }
}
