import mongoose from 'mongoose';
import { CreateOrderDto } from '../dtos/create-order.dto';
import { Order, OrderDocument } from '../models/order.model';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

export class OrderRepository {
  constructor(
    @InjectModel(Order.name)
    private readonly order: mongoose.Model<Order & OrderDocument>,
  ) {}
  async create(data: CreateOrderDto, session) {
    const order = await this.order.create([{ ...data }], { session: session });
    return order;
  }
}
