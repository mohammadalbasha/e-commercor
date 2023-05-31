import { Body, Controller, Get, Post, UseInterceptors } from '@nestjs/common';
import { AppService } from './app.service';
import { classToPlain, classToPlainFromExist } from 'class-transformer';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
    const data = {
      name: 'string',
      price: 'number',
    };
    console.log(classToPlain(data));
  }

  @Get('')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('')
  @UseInterceptors(FileInterceptor)
  hello(@Body() data) {
    console.log(data);
    return data;
  }
}
