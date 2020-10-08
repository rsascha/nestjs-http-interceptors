import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AppService {
  getHello(request: Request): string {
    return `
<p>Hello from dummy-service listen at port :3000! Yes - not from service-with-interceptor at :3001 - well ...</p>
<p>I received: ${JSON.stringify(request.headers)}</p>
<p>The browser language is: ${request.headers['browser-language']}</p>
`;
  }
}
