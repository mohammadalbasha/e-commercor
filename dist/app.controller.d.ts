import { AppService } from './app.service';
import { ConfigService } from '@nestjs/config';
export declare class AppController {
    private readonly appService;
    private con;
    constructor(appService: AppService, con: ConfigService);
    getHello(): string;
    hello(data: any): any;
}
