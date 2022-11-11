import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { MAIN_URL } from '../shared/constants/main-url';

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  public products$: BehaviorSubject<[]> = new BehaviorSubject([]);
  public token$?: BehaviorSubject<string> = new BehaviorSubject('');
  public productId$?: BehaviorSubject<any> = new BehaviorSubject(0);

  constructor(private http: HttpClient) {}

  public authorization(body: any): any {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    console.log(headers);
    return this.http.post(`${MAIN_URL}/api/login/`, body, {
      headers,
    });
  }

  public registration(body: any): any {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.post(`${MAIN_URL}/api/register/`, body, {
      headers,
    });
  }

  public postReviews(productId: number, User: any): any {
    const headers = new HttpHeaders()
      .set('accept', 'application/json')
      .set('Content-Type', 'application/json');

    return this.http.post(`${MAIN_URL}/api/reviews/${productId}`, User, {
      headers,
    });
  }

  public getProducts(): any {
    return this.http.get(`${MAIN_URL}/api/products`);
  }

  public getReviews(productId: number): any {
    this.productId$?.next(productId);
    return this.http.get(`${MAIN_URL}/api/reviews/${productId}`);
  }
}
