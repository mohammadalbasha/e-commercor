export declare class AddressDto {
    country: string;
    city: string;
    state: string;
    fullAddress: string;
    street: string;
    buildingNumber: number;
    lan: string;
    lat: string;
}
export declare class SignupDto {
    firstName: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
    nationality: string;
    ssn: string;
    address: AddressDto;
}
export declare class SignupData extends SignupDto {
    storeId: string;
}
