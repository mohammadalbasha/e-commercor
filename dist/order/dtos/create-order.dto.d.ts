import { AddressDto } from 'src/customer/dtos/signup.dto';
export declare class CreateOrderDto {
    productId: string;
    customerId: string;
    storeId: string;
    recieverAddress: AddressDto;
    recieverFirstName: string;
    recieverLastName: string;
    recieverEmail: string;
    recieverPhoneNumber: string;
}
