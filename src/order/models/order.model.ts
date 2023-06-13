import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Validate } from 'class-validator';
import { Address, Customer } from 'src/customer/models/customer.model';
import { Product } from 'src/product/models/product.model';
import { defaultSchemaOptions } from 'src/shared/constants/common';
import { BaseModel } from 'src/shared/models/base.model';
import {
  PropObject,
  PropRef,
} from 'src/shared/models/decorators/mongoose/PropRef.decorator';
import { UniqueMulti } from 'src/shared/validation/uniqueMulti.validator';
import { Store } from 'src/store/models/store.model';

@Schema(defaultSchemaOptions)
export class Order extends BaseModel {
  @Prop({ index: true, required: true })
  recieverFirstName: string;

  @Prop({ index: true, required: true })
  recieverLastName: string;

  @Prop({ required: true, index: true })
  recieverEmail: string;

  @Prop({ required: true, index: true })
  recieverPhoneNumber: string;

  @Prop({ type: Address, required: true })
  recieverAddress: Address;

  @PropRef(Store)
  storeId?: string;
  @PropObject(Store)
  store?: Store;

  @PropRef(Product)
  productId?: string;
  @PropObject(Product)
  product?: Product;

  @PropRef(Customer)
  customerId?: string;
  @PropObject(Customer)
  customer?: Customer;

  @Prop({ required: true, default: false })
  isCaptured: boolean;
}

export type OrderDocument = Order & Document;
export const OrderSchema = SchemaFactory.createForClass(Order);
