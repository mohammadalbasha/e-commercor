import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  BadRequestException,
  Get,
  Param,
  NotFoundException,
  StreamableFile,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { existsSync, createReadStream } from 'fs';
import { extname, join } from 'path';
import { env } from 'process';
import { Public } from 'src/authentication/decorators';
import { Can } from 'src/authorization/casl/checkPolicies.decorator';
import { User } from 'src/authorization/casl/user.model';
import { fileFilter } from './file.filter';
import { MediaFile } from './file.model';
import { MediaFileService } from './file.service';
import { v4 as uuid } from 'uuid';
import { diskStorage } from 'multer';
import { Response } from '@nestjs/common';
const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

// cloudinary.config({
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// });

cloudinary.config({
  cloud_name: 'dn9mwwr0j',
  api_key: '333597543688648',
  api_secret: 'BkR5QVSawLlga1eJZ6BsPVWOGyY',
});

const cloudinaryStorage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'images',
    //format: async (req, file) => 'png', // supports promises as well
    public_id: (req, file) => Date.now() + file.originalname,
  },
});

// const localStorage = diskStorage({
//   destination: env.PublicLocalStoragePath || './public',
//   filename: (req: any, file: any, cb: any) => {
//     cb(null, `${uuid()}${extname(file.originalname)}`);
//   },
// });

@Controller()
export class FileController {
  constructor(protected mediaFileService: MediaFileService) {}

  @Post('file/upload')
  @UseInterceptors(
    FileInterceptor('file', {
      limits: {
        //fileSize: +env.MaxPublicFileUploadSize,
        fieldSize: 100000,
      },
      storage: cloudinaryStorage,
      fileFilter: fileFilter(
        [
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
        ],
        10000000,
      ),
    }),
  )
  async uploadPublicFile(@UploadedFile() file: Express.Multer.File) {
    if (!file) throw new BadRequestException('No file selected');

    return file;
    // this required if we save file locally
    const mediaFile = this.mediaFileService.saveFile(file);
    return mediaFile;
  }

  // @Get('file/:id')
  // async downloadFile(
  //   @Response({ passthrough: true }) res,
  //   @Param('id') id: string,
  // ) {
  //   try {
  //     const mediaFile = await this.mediaFileService.findById(id);
  //     console.log(mediaFile);
  //     if (!mediaFile) throw new NotFoundException();
  //     console.log(mediaFile);
  //     if (!existsSync(mediaFile.path)) {
  //       throw new NotFoundException();
  //     }

  //     res.set({
  //       'Content-Type': mediaFile.mimeType,
  //       'Content-Disposition':
  //         'attachment; filename="' + mediaFile.originalName + '"',
  //     });

  //     const file = createReadStream(join(process.cwd(), mediaFile.path));
  //     return new StreamableFile(file);
  //   } catch (err) {
  //     throw new NotFoundException();
  //   }
  // }
}
