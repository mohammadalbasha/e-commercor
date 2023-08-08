import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Validate } from 'class-validator';
import { Product } from 'src/product/models/product.model';
import { defaultSchemaOptions } from 'src/shared/constants';
import { BaseModel } from 'src/shared/models/base.model';
import {
  PropRef,
  PropObject,
} from 'src/shared/models/decorators/mongoose/PropRef.decorator';
import { BaseSchema } from 'src/shared/mongoose/base.schema';
import { UniqueMulti } from 'src/shared/validation/uniqueMulti.validator';
import { Store } from 'src/store/models/store.model';

@Schema(defaultSchemaOptions)
export class Collection extends BaseModel {
  @Prop({ index: true, required: true })
  name: string;

  @Prop()
  description: string;

  @PropRef(Store)
  storeId: string;
  @PropObject(Store)
  store: Store;

  @PropRef(Product, true)
  productsId: string[];
  @PropObject(Product, true)
  products: Product[];

  @Prop({ default: false, required: true })
  isSale: boolean;

  @Prop({ default: 0, required: true })
  saleValue: number;
}

export type CollectionDocument = Collection & Document;
//export const CollectionSchema = SchemaFactory.createForClass(Collection);
export const CollectionSchema = BaseSchema(Collection);
