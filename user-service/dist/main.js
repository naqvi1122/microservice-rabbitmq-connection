"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const microservices_1 = require("@nestjs/microservices");
const common_1 = require("@nestjs/common");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, {
        transport: microservices_1.Transport.RMQ,
        options: {
            urls: ['amqp://localhost:5672'],
            queue: 'user_queue',
            queueOptions: {
                durable: true,
            },
        },
    });
    await app.listen();
    common_1.Logger.log('user service is runing with rabitmq');
}
bootstrap();
//# sourceMappingURL=main.js.map