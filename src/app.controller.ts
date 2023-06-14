import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { classToPlain, classToPlainFromExist } from 'class-transformer';
import { ConfigService } from '@nestjs/config';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private con: ConfigService,
  ) {
    console.log(con.get('mongo').production_url);
   }

  @Get('')
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('')
  hello(@Body() data) {
    console.log(data);
    return data;
  }
}
