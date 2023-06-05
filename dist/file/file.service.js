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
exports.MediaFileService = void 0;
const common_1 = require("@nestjs/common");
const file_model_1 = require("./file.model");
const mongoose_1 = require("mongoose");
const mongoose_2 = require("@nestjs/mongoose");
let MediaFileService = class MediaFileService {
    constructor(mediaFile) {
        this.mediaFile = mediaFile;
    }
    async saveFile(file) {
        const data = {
            mimeType: file.mimetype,
            originalName: file.originalname,
            path: file.path,
            size: file.size,
            filename: file.filename,
        };
        return this.mediaFile.create(data);
    }
    findById(id) {
        return this.mediaFile.findById(id);
    }
};
MediaFileService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_2.InjectModel)(file_model_1.MediaFile.name)),
    __metadata("design:paramtypes", [mongoose_1.default.Model])
], MediaFileService);
exports.MediaFileService = MediaFileService;
//# sourceMappingURL=file.service.js.map