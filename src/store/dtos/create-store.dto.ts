import { Type } from 'class-transformer';
import {
  IsBoolean,
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  Min,
  MinLength,
  Validate,
  ValidateNested,
} from 'class-validator';
import { MatchPassword } from 'src/authentication/decorators/validation/matchPassword.decorator';
import { Unique } from 'src/shared/validation/unique.validator';
import { Store } from '../models/store.model';

export class CreateSellerDto {
  @Validate(Unique, [Store, 'seller.name'])
  @IsString()
  @IsDefined()
  name: string;

  @Validate(Unique, [Store, 'seller.email'])
  @IsEmail()
  @IsDefined()
  email: string;

  @MinLength(8)
  @IsDefined()
  password: string;

  @Validate(MatchPassword)
  confirmPassword: string;

  @Validate(Unique, [Store, 'seller.phoneNumber'])
  @IsString()
  @IsDefined()
  phoneNumber: string;

  @IsString()
  @IsOptional()
  ssn: string;

  @IsOptional()
  @IsString()
  nationality: string;
}

export class CreateStoreDto {
  @Validate(Unique, [Store, 'name'])
  @IsString()
  @IsDefined()
  name: string;

  @IsDefined()
  @ValidateNested()
  @Type(() => CreateSellerDto)
  seller: CreateSellerDto;

  @IsDefined()
  @IsString()
  businessType: string;

  @IsDefined()
  @IsString()
  description: string;

  @IsOptional()
  @IsString()
  country: string;

  @IsBoolean()
  @IsOptional()
  isMarket: boolean;

  @IsString()
  @IsOptional()
  marketAddress: string;

  @IsString()
  @IsOptional()
  marketName: string;
}
