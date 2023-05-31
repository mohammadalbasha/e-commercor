import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema({ id: true, timestamps: true })
export class BaseModel {
  id: string;

  createdAt?: Date;

  updatedAt?: Date;

  @Prop({ default: true })
  isActive?: boolean;
}
