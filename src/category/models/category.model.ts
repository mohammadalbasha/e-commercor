import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude, Type } from 'class-transformer';
import mongoose from 'mongoose';
import { defaultSchemaOptions } from 'src/shared/constants/common';
import { BaseModel } from 'src/shared/models/base.model';
import {
  PropRef,
  PropObject,
} from 'src/shared/models/decorators/mongoose/PropRef.decorator';
import { Store } from 'src/store/models/store.model';

@Schema(defaultSchemaOptions)
export class ProductProperties {
  @Prop({ required: true })
  name: string;

  // the object will be like {name: "text", price: "number", count: "number"}

  @Prop({ required: true })
  price: string;

  @Prop({ required: true })
  count: string;
}

@Schema(defaultSchemaOptions)
export class Category extends BaseModel {
  @Prop({ index: true, required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ default: false, required: true })
  isSale: boolean;

  @Prop({ default: 0, required: true })
  saleValue: number;

  @Prop()
  imagesIds: string[];

  @PropRef(Store)
  storeId: string;
  @PropObject(Store)
  store: Store;

  @Prop({ type: ProductProperties })
  productProperties: ProductProperties;
}

export type CategoryDocument = Category & Document;
export const CategorySchema = SchemaFactory.createForClass(Category);
