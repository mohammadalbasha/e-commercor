import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Customer } from 'src/customer/models/customer.model';
import { Product } from 'src/product/models/product.model';
import { defaultSchemaOptions } from 'src/shared/constants';
import { BaseModel } from 'src/shared/models/base.model';
import {
  PropRef,
  PropObject,
} from 'src/shared/models/decorators/mongoose/PropRef.decorator';
import { BaseSchema } from 'src/shared/mongoose/base.schema';

@Schema(defaultSchemaOptions)
export class Feedback extends BaseModel {
  @Prop({ required: true })
  text: string;

  @PropRef(Product)
  productId: string;
  @PropObject(Product)
  product: Product;

  @PropRef(Customer)
  customerId: string;
  @PropObject(Customer)
  customer: Customer;
}

export type FeedbackDocument = Feedback & Document;
//export const FeedbackSchema = SchemaFactory.createForClass(Feedback);
export const FeedbackSchema = BaseSchema(Feedback);
