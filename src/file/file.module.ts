import { Module } from '@nestjs/common';
import { FileController } from './file.controller';
import { MediaFileService } from './file.service';
import { MongooseModule } from '@nestjs/mongoose';
import { MediaFile, MediaFileSchema } from './file.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: MediaFile.name, schema: MediaFileSchema },
    ]),
  ],
  controllers: [FileController],
  providers: [MediaFileService],
})
export class MediaFileModule {}
