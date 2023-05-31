import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { classToPlain, classToPlainFromExist } from 'class-transformer';

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
}
