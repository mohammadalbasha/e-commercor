import { IsDefined, IsString, Validate } from 'class-validator';
import { IsRef } from 'src/shared/validation/isRef.validator';
import { Store } from '../models/store.model';

export class ActivateStoreDto {
  @Validate(IsRef, [Store])
  @IsString()
  @IsDefined()
  storeId: string;
}
