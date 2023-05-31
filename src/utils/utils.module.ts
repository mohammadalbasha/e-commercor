import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongoConfig, NestConfig } from '../shared//configs/config.interface';
import { MongooseModule, MongooseModuleOptions } from '@nestjs/mongoose';
import { env } from 'process';

//import { join } from 'path';
//import { ServeStaticModule } from '@nestjs/serve-static';
import { MulterModule } from '@nestjs/platform-express';
import { Module } from '@nestjs/common';
import { PaypalModule } from 'src/paypal/paypal.module';

@Module({
  imports: [
    // ServeStaticModule.forRoot({
    //   // rootPath: join(__dirname, '..', env.PublicLocalStoragePath),
    //   rootPath: join(__dirname, '..', env.PublicLocalStoragePath),
    //   renderPath: '/public/*',
    //   serveRoot: '/public'

    // }),
    MulterModule.register({
      dest: './upload',
      limits: {
        fileSize: 10000000,
      },
    }),

    MongooseModule.forRootAsync({
      useFactory: async (
        configService: ConfigService,
      ): Promise<MongooseModuleOptions> => ({
        uri: configService.get('mongo').production_url,
        connectionFactory: (connection) => {
          return connection;
        },
      }),

      inject: [ConfigService],
    }),
    PaypalModule,
  ],

  //   providers: [
  //     AppResolver, DateScalar, JSONScalar,
  //     // Validators (using AppModule as Container for Validations)
  //     // Those can be provided by Auth Module
  //     Unique,
  //     IsRef]
})
export class UtilsModule {}
