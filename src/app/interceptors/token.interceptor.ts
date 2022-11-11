import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { RequestsService } from '../services/requests.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private requestsService: RequestsService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let token = sessionStorage.getItem('token');

    if (token) {
      console.log(token);
      // If we have a token, we set it to the header
      request = request.clone({
        setHeaders: { Authorization: `${token}` },
      });
      console.log(request);
    }

    return next.handle(request).pipe(
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status === 401) {
            // redirect user to the logout page
          }
        }
        return throwError(err);
      })
    );
  }
}
