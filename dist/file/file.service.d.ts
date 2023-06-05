/// <reference types="multer" />
import { MediaFile, MediaFileDocument } from './file.model';
import mongoose from 'mongoose';
export declare class MediaFileService {
    private readonly mediaFile;
    constructor(mediaFile: mongoose.Model<MediaFile & MediaFileDocument>);
    saveFile(file: Express.Multer.File): Promise<mongoose.Document<unknown, {}, MediaFile & Document> & Omit<MediaFile & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>>;
    findById(id: any): mongoose.Query<mongoose.Document<unknown, {}, MediaFile & Document> & Omit<MediaFile & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>, mongoose.Document<unknown, {}, MediaFile & Document> & Omit<MediaFile & Document & {
        _id: mongoose.Types.ObjectId;
    }, never>, {}, MediaFile & Document>;
}
