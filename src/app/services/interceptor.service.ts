import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor,HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Injectable, NgModule } from '@angular/core';

@Injectable()
export class InterceptorService implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            setHeaders: {
                'User-Agent': `Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.4 Mobile/15E148 Safari/604.1`,
                'plm': 'da'
            }
        });

        return next.handle(request);
    }
}
@NgModule({
  providers: [
  { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ]
  })
  export class InterceptorModule { }