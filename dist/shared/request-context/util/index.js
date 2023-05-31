"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRequestContext = void 0;
const constants_1 = require("../../constants");
const request_context_dto_1 = require("../request-context.dto");
function createRequestContext(request) {
    const ctx = new request_context_dto_1.RequestContext();
    ctx.requestID = request.header(constants_1.REQUEST_ID_TOKEN_HEADER);
    ctx.url = request.url;
    ctx.ip = request.header(constants_1.FORWARDED_FOR_TOKEN_HEADER)
        ? request.header(constants_1.FORWARDED_FOR_TOKEN_HEADER)
        : request.ip;
    return ctx;
}
exports.createRequestContext = createRequestContext;
//# sourceMappingURL=index.js.map