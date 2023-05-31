"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.configModuleOptions = void 0;
const config_1 = require("./config");
exports.configModuleOptions = {
    envFilePath: '.env',
    isGlobal: true,
    load: [config_1.default],
};
//# sourceMappingURL=module-options.js.map