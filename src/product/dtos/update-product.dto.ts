import {
  IsBoolean,
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Validate,
} from 'class-validator';
import { Category } from 'src/category/models/category.model';
import { IsRef } from 'src/shared/validation/isRef.validator';
import { Store } from 'src/store/models/store.model';

export class UpdateProductDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsNumber()
  price: number;

  @IsOptional()
  @IsNumber()
  count: number;

  @IsOptional()
  @IsBoolean()
  isSale: boolean;

  @IsOptional()
  @IsNumber()
  saleValue: number;
}
