export declare class CreateSellerDto {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    phoneNumber: string;
    ssn: string;
    nationality: string;
}
export declare class CreateStoreDto {
    name: string;
    seller: CreateSellerDto;
    businessType: string;
    description: string;
    country: string;
    isMarket: boolean;
    marketAddress: string;
    marketName: string;
}
