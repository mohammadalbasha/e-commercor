"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MediaFileSchema = exports.MediaFile = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const constants_1 = require("../shared/constants");
var MediaFileStorageType;
(function (MediaFileStorageType) {
    MediaFileStorageType["local"] = "local";
    MediaFileStorageType["cloud"] = "cloud";
})(MediaFileStorageType || (MediaFileStorageType = {}));
let MediaFile = class MediaFile {
};
__decorate([
    (0, mongoose_1.Prop)({ default: 'cloud' }),
    __metadata("design:type", String)
], MediaFile.prototype, "storage", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MediaFile.prototype, "path", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MediaFile.prototype, "filename", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MediaFile.prototype, "originalName", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", Number)
], MediaFile.prototype, "size", void 0);
__decorate([
    (0, mongoose_1.Prop)(),
    __metadata("design:type", String)
], MediaFile.prototype, "mimeType", void 0);
MediaFile = __decorate([
    (0, mongoose_1.Schema)(constants_1.defaultSchemaOptions)
], MediaFile);
exports.MediaFile = MediaFile;
exports.MediaFileSchema = mongoose_1.SchemaFactory.createForClass(MediaFile);
//# sourceMappingURL=file.model.js.map