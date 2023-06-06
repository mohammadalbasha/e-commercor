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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const file_service_1 = require("./file.service");
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
cloudinary.config({
    cloud_name: 'dn9mwwr0j',
    api_key: '333597543688648',
    api_secret: 'BkR5QVSawLlga1eJZ6BsPVWOGyY',
});
const cloudinaryStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'images',
        public_id: (req, file) => Date.now() + file.originalname,
    },
});
let FileController = class FileController {
    constructor(mediaFileService) {
        this.mediaFileService = mediaFileService;
    }
    async uploadPublicFile(file) {
        if (!file)
            throw new common_1.BadRequestException('No file selected');
        return file;
        const mediaFile = this.mediaFileService.saveFile(file);
        return mediaFile;
    }
};
__decorate([
    (0, common_1.Post)('file/upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        limits: {
            fieldSize: 100000,
        },
        storage: cloudinaryStorage,
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "uploadPublicFile", null);
FileController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [file_service_1.MediaFileService])
], FileController);
exports.FileController = FileController;
//# sourceMappingURL=file.controller.js.map