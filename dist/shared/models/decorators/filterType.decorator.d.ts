import 'reflect-metadata';
export declare function FilterType(type: 'contains' | 'equals' | 'locale_contains' | 'scalar_list' | 'default'): {
    (target: Function): void;
    (target: Object, propertyKey: string | symbol): void;
};
export declare function getPrismaWhereByFilterDto(dto: any): {};
