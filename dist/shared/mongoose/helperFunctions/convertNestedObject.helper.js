"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertObjectToNested = exports.convertToDotNotation = void 0;
function convertToDotNotation(obj, newObj = {}, prefix = '') {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            convertToDotNotation(obj[key], newObj, prefix + key + '.');
        }
        else {
            newObj[prefix + key] = obj[key];
        }
    }
    return newObj;
}
exports.convertToDotNotation = convertToDotNotation;
function convertObjectToNested(key, data) {
    return {
        [key]: Object.assign({}, data),
    };
}
exports.convertObjectToNested = convertObjectToNested;
//# sourceMappingURL=convertNestedObject.helper.js.map