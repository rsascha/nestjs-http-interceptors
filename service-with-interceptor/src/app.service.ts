import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
import { map } from 'rxjs/operators';

@Injectable()
export class AppService {
    constructor(private readonly httpService: HttpService) {}

    getHello(): Observable<any> {
        return this.httpService.get('http://localhost:3000').pipe(
          map(response => response.data)
        );
    }
}
