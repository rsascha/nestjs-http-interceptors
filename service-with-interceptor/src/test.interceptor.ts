import {
    CallHandler,
    ExecutionContext,
    HttpService,
    Injectable,
    Logger,
    NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class TestInterceptor implements NestInterceptor {
    constructor(
        private readonly logger: Logger,
        private readonly httpService: HttpService,
    ) {}

    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        this.logger.log('TestInterceptor - enter intercept');
        const request = context.switchToHttp().getRequest<Request>();
        const acceptLanguage = request.headers['accept-language'];
        this.httpService.axiosRef.interceptors.request.use(config => {
            this.logger.log(`TestInterceptor - enter Axios interceptor`);
            this.logger.log(`config: ${JSON.stringify(config)}`);
            config.headers['common']['browser-language'] = acceptLanguage;
            return config;
        });

        return next.handle();
    }
}
