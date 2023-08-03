import {
  IsDefined,
  IsString,
  IsNotEmpty,
  MaxLength,
  Validate,
} from 'class-validator';
import { UniqueCategoryName } from 'src/shared/validation/uniqueCategoryName.validator';
import { Collection } from '../models/collection.model';

export class CreateCollectionDto {
  //@Validate(UniqueCategoryName, [Category, 'name'])
  @Validate(UniqueCategoryName, [Collection, 'name'])
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  // @Validate(IsRef, [Store])
  // @IsString()
  // @IsDefined()
  // @IsNotEmpty()
  storeId: string;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @MaxLength(300)
  description: string;
}
