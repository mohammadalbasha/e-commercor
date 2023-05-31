"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPrismaWhereByFilterDto = exports.FilterType = void 0;
require("reflect-metadata");
const filterTypeMetadataKey = Symbol('format');
function FilterType(type) {
    return Reflect.metadata(filterTypeMetadataKey, type);
}
exports.FilterType = FilterType;
function getFilterType(target, propertyKey) {
    return Reflect.getMetadata(filterTypeMetadataKey, target, propertyKey);
}
function getPrismaWhereByFilterDto(dto) {
    const result = {};
    if (!dto)
        return result;
    Object.getOwnPropertyNames(dto).forEach((x) => {
        if (dto[x] && dto[x] !== '') {
            const filterType = getFilterType(dto, x);
            if (filterType === 'locale_contains') {
                result['OR'] = [
                    {
                        [x]: {
                            path: ['en'],
                            string_contains: dto[x],
                        },
                    },
                    {
                        [x]: {
                            path: ['ar'],
                            string_contains: dto[x],
                        },
                    },
                    {
                        [x]: {
                            path: ['tr'],
                            string_contains: dto[x],
                        },
                    },
                ];
            }
            else if (filterType === 'equals') {
                result[x] = dto[x] == 'false' || dto[x] == false ? false : true;
            }
            else if (filterType === 'scalar_list') {
                result[x] = {
                    hasEvery: dto[x],
                };
            }
            else if (filterType === 'contains') {
                result[x] = { [filterType !== null && filterType !== void 0 ? filterType : 'contains']: dto[x] };
            }
            else {
                result[x] = dto[x];
            }
        }
    });
    return result;
}
exports.getPrismaWhereByFilterDto = getPrismaWhereByFilterDto;
//# sourceMappingURL=filterType.decorator.js.map