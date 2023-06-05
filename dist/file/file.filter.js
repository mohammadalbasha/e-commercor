"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileFilter = void 0;
const common_1 = require("@nestjs/common");
function fileFilter(mimetypes, maxSize = 1000000) {
    return (req, file, callback) => {
        if (file.size > maxSize) {
            callback(new common_1.UnsupportedMediaTypeException(`File size is bigger than: ${maxSize}`), false);
        }
        if (!mimetypes.some((m) => file.mimetype.includes(m))) {
            callback(new common_1.UnsupportedMediaTypeException(`File type is not matching: ${mimetypes.join(', ')}`), false);
        }
        const fileExtension = file.originalname.split('.').pop();
        if (!mimetypes.some((m) => fileExtension.includes(m))) {
            callback(new common_1.UnsupportedMediaTypeException(`File type is not matching: ${mimetypes.join(', ')}`), false);
        }
        callback(null, true);
    };
}
exports.fileFilter = fileFilter;
//# sourceMappingURL=file.filter.js.map