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
  Validate,
  ValidateNested,
} from 'class-validator';
import { IsRef } from 'src/shared/validation/isRef.validator';
import { Store } from 'src/store/models/store.model';

export class ProductProperties {
  @IsDefined()
  name: any;

  @IsDefined()
  price: any;

  @IsDefined()
  count: any;
}

export class CreateCategoryDto {
  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @Max(100)
  name: string;

  @Validate(IsRef, [Store])
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  storeId: string;

  @IsDefined()
  @IsString()
  @IsNotEmpty()
  @Max(100)
  description: string;

  @IsOptional()
  @IsBoolean()
  isSale: boolean;

  @IsOptional()
  @IsNumber()
  sale: number;

  @ValidateNested()
  @IsDefined()
  // @IsObject()
  @Type(() => ProductProperties)
  productProperties: ProductProperties;
}
