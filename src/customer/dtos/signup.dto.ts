import {
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Validate,
  ValidateNested,
} from 'class-validator';
import { MatchPassword } from 'src/authentication/decorators/validation/matchPassword.decorator';
import { IsRef } from 'src/shared/validation/isRef-old.validator';
import { Customer } from '../models/customer.model';
import { Store } from 'src/store/models/store.model';

export class AddressDto {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  country: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  city: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  state: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  fullAddress: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  street: string;

  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  buildingNumber: number;

  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  lan: string;

  @IsDefined()
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

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  ssn: string;

  @IsDefined()
  @IsNotEmpty()
  @ValidateNested()
  address: AddressDto;
}

export class SignupData extends SignupDto {
  @Validate(IsRef, [Store])
  storeId: string;
}
