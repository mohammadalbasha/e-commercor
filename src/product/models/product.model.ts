import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude, Type } from 'class-transformer';
import { Category } from 'src/category/models/category.model';
import { defaultSchemaOptions } from 'src/shared/constants/common';
import { BaseModel } from 'src/shared/models/base.model';
import {
  PropRef,
  PropObject,
} from 'src/shared/models/decorators/mongoose/PropRef.decorator';
import { BaseSchema } from 'src/shared/mongoose/base.schema';
import { Store } from 'src/store/models/store.model';

@Schema(defaultSchemaOptions)
export class Product extends BaseModel {
  @Prop({ index: true, required: true })
  name: string;

  @Prop({ required: true, index: true })
  price: number;

  @Prop({ required: true, index: true, min: 0 })
  count: number;

  @Prop({ required: true, default: '' })
  Imagesproduct: string;

  @Prop({ required: true, index: true, default: false })
  isSale: boolean;

  @Prop({ required: true, default: 0 })
  saleValue: number;

  @PropRef(Store)
  storeId: string;
  @PropObject(Store)
  store: Store;

  @PropRef(Category)
  categoryId: string;
  @PropObject(Category)
  category: Category;

  @Prop({ default: 0, required: true })
  version: number;
}

export type ProductDocument = Product & Document;
//export const ProductSchema = SchemaFactory.createForClass(Product);
export const ProductSchema = BaseSchema(Product);
