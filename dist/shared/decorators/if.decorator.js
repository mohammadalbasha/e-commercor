"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function IfDecorator(condition, decorator) {
    return (...args) => {
        if (condition) {
            return decorator(...args);
        }
    };
}
exports.default = IfDecorator;
//# sourceMappingURL=if.decorator.js.map