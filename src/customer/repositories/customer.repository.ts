import { Injectable } from '@nestjs/common';
import { InjectModel, InjectConnection } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Customer, CustomerDocument } from '../models/customer.model';
import { SignupData } from '../dtos/signup.dto';

@Injectable()
export class CustomerRepository {
  constructor(
    @InjectModel(Customer.name)
    private readonly customer: mongoose.Model<Customer & CustomerDocument>,
    @InjectConnection() protected connection: mongoose.Connection,
  ) {}

  async create(data: Omit<SignupData, 'confirmPassword'>) {
    const customer = await this.customer.create(data);
    return customer;
  }

  async findById(customerId: string) {
    const customer = await this.customer.findById(customerId);
    return customer;
  }

  async findByIdAndStoreId(customerId: string, storeId: string) {
    const customer = await this.customer.findOne({
      id: customerId,
      storeId: storeId,
    });
    return customer;
  }
  async findByEmailAndStoreId(email: string, storeId: string) {
    const customer = await this.customer.findOne({
      email: email,
      storeId: storeId,
    });
    return customer;
  }
}
