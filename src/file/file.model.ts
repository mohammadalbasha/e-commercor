import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { defaultSchemaOptions } from 'src/shared/constants';

enum MediaFileStorageType {
  local = 'local',
  cloud = 'cloud',
}

@Schema(defaultSchemaOptions)
export class MediaFile {
  @Prop({ default: 'cloud' })
  storage?: MediaFileStorageType;

  @Prop()
  path?: string;

  @Prop()
  filename?: string;

  @Prop()
  originalName?: string;

  @Prop()
  size?: number;

  @Prop()
  mimeType?: string;

  //  toJSON() { return classToPlain(this); }
}

export type MediaFileDocument = MediaFile & Document;
export const MediaFileSchema = SchemaFactory.createForClass(MediaFile);
