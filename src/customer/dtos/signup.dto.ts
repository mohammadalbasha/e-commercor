import {
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Validate,
  ValidateNested,
} from 'class-validator';
import { MatchPassword } from 'src/authentication/decorators/validation/matchPassword.decorator';
import { IsRef } from 'src/shared/validation/isRef-old.validator';
import { Customer } from '../models/customer.model';
import { Store } from 'src/store/models/store.model';

export class AddressDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  country: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  city: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  state: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  fullAddress: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  street: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  buildingNumber: number;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  lan: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  lat: string;
}

export class SignupDto {
  @IsNotEmpty()
  @IsString()
  @IsDefined()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @IsDefined()
  lastName: string;

  @IsNotEmpty()
  @IsEmail()
  @IsDefined()
  email: string;

  @IsNotEmpty()
  @IsString()
  @IsDefined()
  phoneNumber: string;

  @IsNotEmpty()
  @IsString()
  @IsDefined()
  password: string;

  @Validate(MatchPassword)
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  confirmPassword: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  nationality: string;

  @IsOptional()
  @IsNotEmpty()
  @IsString()
  ssn: string;

  @IsOptional()
  @IsNotEmpty()
  @ValidateNested()
  address: AddressDto;
}

export class SignupData extends SignupDto {
  @Validate(IsRef, [Store])
  storeId: string;
}
