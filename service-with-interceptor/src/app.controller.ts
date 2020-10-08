import { Controller, Get, UseInterceptors } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AppService } from './app.service';
import { AxiosResponse } from 'axios';
import { TestInterceptor } from './test.interceptor';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseInterceptors(TestInterceptor)
  getHello(): Observable<any> {
    return this.appService.getHello();
  }
}
