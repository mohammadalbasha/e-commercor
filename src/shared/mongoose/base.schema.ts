import { Type } from '@nestjs/common';
import { SchemaFactory } from '@nestjs/mongoose';
import { getMongooseVirtuals } from '../models/decorators/mongoose/PropRef.decorator';

export function BaseSchema<ModelType>(Model: Type<ModelType>) {
  const Schema = SchemaFactory.createForClass(Model);
  //Schema.index({ '$**': 'text' });

  const virtuals = getMongooseVirtuals(Model);
  for (const v in virtuals) {
    Schema.virtual(v, virtuals[v]);
  }
  return Schema;
}
