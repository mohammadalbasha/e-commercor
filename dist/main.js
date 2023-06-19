"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const request_id_middleware_1 = require("./shared/middlewares/request-id/request-id.middleware");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const class_validator_1 = require("class-validator");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const nestConfig = configService.get('nest');
    const corsConfig = configService.get('cors');
    const validationPipeOptions = configService.get('validationPipeOptions');
    if (corsConfig.enabled)
        app.enableCors({ origin: 'http://localhost:3000' });
    app.useGlobalPipes(new common_1.ValidationPipe(validationPipeOptions));
    app.use(request_id_middleware_1.RequestIdMiddleware);
    (0, class_validator_1.useContainer)(app.select(app_module_1.AppModule), {
        fallbackOnErrors: true,
        fallback: true,
    });
    await app.listen(nestConfig.port);
}
bootstrap();
//# sourceMappingURL=main.js.map