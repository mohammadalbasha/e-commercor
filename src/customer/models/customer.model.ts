import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude, Type } from 'class-transformer';
import { Validate } from 'class-validator';
import mongoose, { Mongoose, SchemaType } from 'mongoose';
import { defaultSchemaOptions } from 'src/shared/constants/common';
import { BaseModel } from 'src/shared/models/base.model';
import {
  PropObject,
  PropRef,
} from 'src/shared/models/decorators/mongoose/PropRef.decorator';
import { UniqueMulti } from 'src/shared/validation/uniqueMulti.validator';
import { Store } from 'src/store/models/store.model';

@Schema(defaultSchemaOptions)
export class Address extends BaseModel {
  // TODO:
  // create countries in database and make reference

  @Prop()
  country: string;

  @Prop()
  city: string;

  @Prop()
  state: string;

  @Prop()
  street: string;

  @Prop()
  fullAddress: string;

  @Prop()
  buildingNumber: number;

  @Prop()
  lat: number;

  @Prop()
  lan: number;
}

@Schema(defaultSchemaOptions)
export class Customer extends BaseModel {
  @Prop({ index: true, required: true })
  firstName: string;

  @Prop({ index: true, required: true })
  lastName: string;

  @Validate(UniqueMulti, [Customer, 'email', 'storeId'])
  @Prop({ required: true, index: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Validate(UniqueMulti, [Customer, 'phoneNumber', 'storeId'])
  @Prop({ required: true })
  phoneNumber: string;

  @Prop({ type: Address })
  address: Address;

  @Prop()
  ssn: string;

  @Prop()
  nationality: string;

  @PropRef(Store)
  storeId?: string;
  @PropObject(Store)
  store?: Store;
}

export type CustomerDocument = Customer & Document;
export const CustomerSchema = SchemaFactory.createForClass(Customer);
