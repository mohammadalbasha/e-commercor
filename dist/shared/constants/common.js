"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultSchemaOptions = exports.VALIDATION_PIPE_OPTIONS = exports.FORWARDED_FOR_TOKEN_HEADER = exports.REQUEST_ID_TOKEN_HEADER = void 0;
exports.REQUEST_ID_TOKEN_HEADER = 'x-request-id';
exports.FORWARDED_FOR_TOKEN_HEADER = 'x-forwarded-for';
exports.VALIDATION_PIPE_OPTIONS = { transform: true, whitelist: true };
exports.defaultSchemaOptions = {
    timestamps: true,
    strict: false,
    strictPopulate: false,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
};
//# sourceMappingURL=common.js.map