import { Injectable } from '@nestjs/common';
import { MediaFile, MediaFileDocument } from './file.model';
import { classToPlain } from 'class-transformer';
import mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

// todo: file resolver
@Injectable()
export class MediaFileService {
  constructor(
    @InjectModel(MediaFile.name)
    private readonly mediaFile: mongoose.Model<MediaFile & MediaFileDocument>,
  ) {}

  async saveFile(file: Express.Multer.File) {
    const data = {
      mimeType: file.mimetype,
      originalName: file.originalname,
      path: file.path,
      size: file.size,
      filename: file.filename,
    } as MediaFile;

    //const r = result.toJSON()
    //delete r['path']
    return this.mediaFile.create(data);
  }

  findById(id) {
    return this.mediaFile.findById(id);
  }
}
