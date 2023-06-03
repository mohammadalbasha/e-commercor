export declare class ProductProperties {
    name: any;
    price: any;
}
export declare class CreateCategoryDto {
    name: string;
    storeId: string;
    description: string;
    isSale: boolean;
    sale: number;
    productProperties: ProductProperties;
}
