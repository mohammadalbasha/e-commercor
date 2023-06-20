import { Validate } from 'class-validator';
import { Product } from 'src/product/models/product.model';
import { IsRef } from 'src/shared/validation/isRef.validator';

export class AddProductToCollectionDto {
  @Validate(IsRef, [Product])
  productId: string;

  // @Validate(IsRef, [Store])
  // @IsString()
  // @IsDefined()
  // @IsNotEmpty()
  storeId: string;

  // @Validate(IsRef, [Store])
  // @IsString()
  // @IsDefined()
  // @IsNotEmpty()
  collectionId: string;
}
