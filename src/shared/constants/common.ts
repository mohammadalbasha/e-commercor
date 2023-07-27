export const REQUEST_ID_TOKEN_HEADER = 'x-request-id';

export const FORWARDED_FOR_TOKEN_HEADER = 'x-forwarded-for';

export const VALIDATION_PIPE_OPTIONS = { transform: true, whitelist: true };

import { SchemaOptions } from '@nestjs/mongoose';

export const defaultSchemaOptions = {
  timestamps: true,
  strict: false,
  strictPopulate: false, // this is for populate field not in the schema , used in product to populate collections
  toJSON: { virtuals: true },
  toObject: { virtuals: true },
} as SchemaOptions;
