import { HttpModule, HttpService, Logger, Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TestInterceptor } from './test.interceptor';

@Module({
    imports: [HttpModule],
    controllers: [AppController],
    providers: [
        AppService,
        {
            provide: APP_INTERCEPTOR,
            useClass: TestInterceptor,
        },
        Logger,
    ],
})
export class AppModule {}
