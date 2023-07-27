import {
  IsDefined,
  IsString,
  IsNotEmpty,
  MaxLength,
  Validate,
} from 'class-validator';
import { Product } from 'src/product/models/product.model';
import { IsRef } from 'src/shared/validation/isRef-old.validator';

export class CreateFeedbackDto {
  //@Validate(UniqueCategoryName, [Category, 'name'])

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @MaxLength(200)
  text: string;

  @Validate(IsRef, [Product])
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  productId: string;

  storeId: string;

  customerId: string;
}
