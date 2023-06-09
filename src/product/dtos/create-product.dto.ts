import {
  IsBoolean,
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
  Validate,
} from 'class-validator';
import { Category } from 'src/category/models/category.model';
import { IsRef } from 'src/shared/validation/isRef.validator';
import { Store } from 'src/store/models/store.model';

export class CreateProductDto {
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  Imagesproduct: string;

  @IsDefined()
  @IsNumber()
  price: number;

  @IsDefined()
  @IsNumber()
  count: number;

  // @Validate(IsRef, [Store])
  // @IsString()
  // @IsDefined()
  // this would be find depending on seller
  storeId: string;

  @Validate(IsRef, [Category])
  @IsString()
  @IsDefined()
  categoryId: string;
}
