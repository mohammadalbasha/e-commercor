import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Exclude, Type } from 'class-transformer';
import mongoose from 'mongoose';
import { Product } from 'src/product/models/product.model';
import { defaultSchemaOptions } from 'src/shared/constants/common';
import { BaseModel } from 'src/shared/models/base.model';
import {
  PropRef,
  PropObject,
} from 'src/shared/models/decorators/mongoose/PropRef.decorator';
import { BaseSchema } from 'src/shared/mongoose/base.schema';
import { Store } from 'src/store/models/store.model';

@Schema(defaultSchemaOptions)
export class ProductProperties {
  @Prop({ required: true })
  name: mongoose.Schema.Types.Mixed;

  // the object will be like {name: "text", price: "number", count: "number"}

  @Prop({ required: true })
  price: mongoose.Schema.Types.Mixed;

  @Prop({ required: true, default: 0 })
  count: mongoose.Schema.Types.Mixed;
}

@Schema(defaultSchemaOptions)
export class Category extends BaseModel {
  private products: Product[];

  @Prop({ index: true, required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({
    required: true,
    default: 'https://i.ytimg.com/vi/2QvOxa_7wEw/maxresdefault.jpg',
  })
  image: string;

  @PropRef(Store)
  storeId: string;
  @PropObject(Store)
  store: Store;

  @Prop({ type: ProductProperties })
  productProperties: ProductProperties;

  @Prop()
  cardProperties: mongoose.Schema.Types.Mixed;
}

export type CategoryDocument = Category & Document;
export const CategorySchema = SchemaFactory.createForClass(Category);
//export const CategorySchema = BaseSchema(Category);
