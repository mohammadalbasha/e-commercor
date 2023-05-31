"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestIdMiddleware = void 0;
const uuid_1 = require("uuid");
const constants_1 = require("../../constants");
const RequestIdMiddleware = (req, res, next) => {
    if (!req.headers[constants_1.REQUEST_ID_TOKEN_HEADER] ||
        !(0, uuid_1.validate)(req.header(constants_1.REQUEST_ID_TOKEN_HEADER))) {
        req.headers[constants_1.REQUEST_ID_TOKEN_HEADER] = (0, uuid_1.v4)();
    }
    res.set(constants_1.REQUEST_ID_TOKEN_HEADER, req.headers[constants_1.REQUEST_ID_TOKEN_HEADER]);
    next();
};
exports.RequestIdMiddleware = RequestIdMiddleware;
//# sourceMappingURL=request-id.middleware.js.map