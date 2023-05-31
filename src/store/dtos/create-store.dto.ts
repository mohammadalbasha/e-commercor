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

export class CreateSellerDto {
  @IsString()
  @IsDefined()
  name: string;

  @IsEmail()
  @IsDefined()
  email: string;

  @MinLength(8)
  @IsDefined()
  password: string;

  @Validate(MatchPassword)
  confirmPassword: string;

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

  @IsBoolean()
  @IsDefined()
  isMarket: boolean;

  @IsString()
  @IsOptional()
  marketAddress: string;

  @IsString()
  @IsOptional()
  marketName: string;
}
