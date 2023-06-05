/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/callback" />
/// <reference types="mongoose/types/collection" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/expressions" />
/// <reference types="mongoose/types/helpers" />
/// <reference types="mongoose/types/middlewares" />
/// <reference types="mongoose/types/indexes" />
/// <reference types="mongoose/types/models" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/populate" />
/// <reference types="mongoose/types/query" />
/// <reference types="mongoose/types/schemaoptions" />
/// <reference types="mongoose/types/schematypes" />
/// <reference types="mongoose/types/session" />
/// <reference types="mongoose/types/types" />
/// <reference types="mongoose/types/utility" />
/// <reference types="mongoose/types/validation" />
/// <reference types="mongoose/types/virtuals" />
/// <reference types="mongoose" />
/// <reference types="mongoose/types/inferschematype" />
declare enum MediaFileStorageType {
    local = "local",
    cloud = "cloud"
}
export declare class MediaFile {
    storage?: MediaFileStorageType;
    path?: string;
    filename?: string;
    originalName?: string;
    size?: number;
    mimeType?: string;
}
export type MediaFileDocument = MediaFile & Document;
export declare const MediaFileSchema: import("mongoose").Schema<MediaFile, import("mongoose").Model<MediaFile, any, any, any, import("mongoose").Document<unknown, any, MediaFile> & Omit<MediaFile & {
    _id: import("mongoose").Types.ObjectId;
}, never>, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, MediaFile, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<MediaFile>> & Omit<import("mongoose").FlatRecord<MediaFile> & {
    _id: import("mongoose").Types.ObjectId;
}, never>>;
export {};
