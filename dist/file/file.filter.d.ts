/// <reference types="express-serve-static-core" />
/// <reference types="multer" />
export declare function fileFilter(mimetypes: string[], maxSize?: number): (req: any, file: Express.Multer.File, callback: (error: Error | null, acceptFile: boolean) => void) => void;
