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
const fs_1 = require("fs");
const path_1 = require("path");
const process_1 = require("process");
const file_filter_1 = require("./file.filter");
const file_service_1 = require("./file.service");
const uuid_1 = require("uuid");
const multer_1 = require("multer");
const common_2 = require("@nestjs/common");
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
const localStorage = (0, multer_1.diskStorage)({
    destination: process_1.env.PublicLocalStoragePath || './public',
    filename: (req, file, cb) => {
        cb(null, `${(0, uuid_1.v4)()}${(0, path_1.extname)(file.originalname)}`);
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
    async downloadFile(res, id) {
        try {
            const mediaFile = await this.mediaFileService.findById(id);
            console.log(mediaFile);
            if (!mediaFile)
                throw new common_1.NotFoundException();
            console.log(mediaFile);
            if (!(0, fs_1.existsSync)(mediaFile.path)) {
                throw new common_1.NotFoundException();
            }
            res.set({
                'Content-Type': mediaFile.mimeType,
                'Content-Disposition': 'attachment; filename="' + mediaFile.originalName + '"',
            });
            const file = (0, fs_1.createReadStream)((0, path_1.join)(process.cwd(), mediaFile.path));
            return new common_1.StreamableFile(file);
        }
        catch (err) {
            throw new common_1.NotFoundException();
        }
    }
};
__decorate([
    (0, common_1.Post)('file/upload'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        limits: {
            fieldSize: 100000,
        },
        storage: cloudinaryStorage,
        fileFilter: (0, file_filter_1.fileFilter)([
            'rtf',
            'pdf',
            'doc',
            'docx',
            'txt',
            'png',
            'jpg',
            'jpeg',
            'gif',
            'ico',
        ], 10000000),
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "uploadPublicFile", null);
__decorate([
    (0, common_1.Get)('file/:id'),
    __param(0, (0, common_2.Response)({ passthrough: true })),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", Promise)
], FileController.prototype, "downloadFile", null);
FileController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [file_service_1.MediaFileService])
], FileController);
exports.FileController = FileController;
//# sourceMappingURL=file.controller.js.map