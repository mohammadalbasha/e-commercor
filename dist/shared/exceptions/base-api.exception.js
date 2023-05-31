"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseApiException = void 0;
const common_1 = require("@nestjs/common");
class BaseApiException extends common_1.HttpException {
    constructor(message, status, details, localizedMessage) {
        super(message, status);
        this.name = BaseApiException.name;
        this.localizedMessage = localizedMessage;
        this.details = details;
    }
}
exports.BaseApiException = BaseApiException;
//# sourceMappingURL=base-api.exception.js.map