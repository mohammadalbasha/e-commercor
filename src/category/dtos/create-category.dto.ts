import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsObject,
  IsOptional,
  IsString,
  Max,
  MaxLength,
  Validate,
  ValidateNested,
} from 'class-validator';
import { IsRef } from 'src/shared/validation/isRef.validator';
import { UniqueMulti } from 'src/shared/validation/uniqueMulti.validator';
import { Store } from 'src/store/models/store.model';
import { Category } from '../models/category.model';
import { UniqueCategoryName } from 'src/shared/validation/uniqueCategoryName.validator';
import { ReqContext } from 'src/shared/request-context/req-context.decorator';

export class ProductProperties {
  @IsDefined()
  name: any;

  @IsDefined()
  price: any;

  // @IsDefined()
  // count: any;
}

export class CreateCategoryDto {
  @Validate(UniqueCategoryName, [Category, 'name'])
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

  @ValidateNested()
  @IsDefined()
  // @IsObject()
  @Type(() => ProductProperties)
  productProperties: ProductProperties;
}
