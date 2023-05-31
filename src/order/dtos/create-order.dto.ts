import {
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsNumber,
  IsString,
  Validate,
  ValidateNested,
} from 'class-validator';
import { AddressDto } from 'src/customer/dtos/signup.dto';
import { Customer } from 'src/customer/models/customer.model';
import { Product } from 'src/product/models/product.model';
import { IsRef } from 'src/shared/validation/isRef-old.validator';
import { Store } from 'src/store/models/store.model';

export class CreateOrderDto {
  @Validate(IsRef, [Product])
  @IsString()
  @IsDefined()
  productId: string;

  @Validate(IsRef, [Customer])
  @IsString()
  @IsDefined()
  customerId: string;

  @Validate(IsRef, [Store])
  @IsString()
  @IsDefined()
  storeId: string;

  @IsDefined()
  @IsNotEmpty()
  @ValidateNested()
  recieverAddress: AddressDto;

  @IsNotEmpty()
  @IsString()
  @IsDefined()
  recieverFirstName: string;

  @IsNotEmpty()
  @IsString()
  @IsDefined()
  recieverLastName: string;

  @IsNotEmpty()
  @IsEmail()
  @IsDefined()
  recieverEmail: string;

  @IsNotEmpty()
  @IsString()
  @IsDefined()
  recieverPhoneNumber: string;
}
