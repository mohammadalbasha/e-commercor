"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterToMongo = void 0;
function filterToMongo(filters) {
    const output = {};
    for (const key in filters) {
        if (filters[key].max && filters[key].min) {
            output[key] = {
                $gte: filters[key].min,
                $lte: filters[key].max,
            };
        }
        else if (filters[key].min) {
            output[key] = {
                $gte: filters[key].min,
            };
        }
        else if (filters[key].max) {
            output[key] = {
                $lte: filters[key].max,
            };
        }
        else {
            const regex = new RegExp(filters[key], 'i');
            output[key] = {
                $regex: regex,
            };
        }
    }
    return output;
}
exports.filterToMongo = filterToMongo;
//# sourceMappingURL=filter.helper.js.map