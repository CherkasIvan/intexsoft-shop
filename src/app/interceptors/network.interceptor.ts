import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';

import { finalize, Observable } from 'rxjs';
import { LoadingService } from '../services/loading.service';

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {
  public totalRequests = 0;
  public completedRequests = 0;

  constructor(private loader: LoadingService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    this.totalRequests++;
    console.log(request);
    if (request.url.indexOf('/main') < 0) {
      this.loader.showSpinner();
    }

    return next.handle(request).pipe(
      finalize(() => {
        console.log(this.totalRequests);
        console.log(this.completedRequests);
        this.completedRequests++;
        if (this.completedRequests === this.totalRequests) {
          this.loader.hideSpinner();
          this.completedRequests = 0;
          this.totalRequests = 0;
        }
      })
    );
  }
}
