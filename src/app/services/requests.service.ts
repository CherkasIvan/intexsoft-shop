import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


import { MAIN_URL } from '../shared/constants/main-url';

@Injectable({
  providedIn: 'root',
})
export class RequestsService {
  constructor(private http: HttpClient) {}

  public authorization(body: any): any {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    return this.http.post(`${MAIN_URL}/api/login/`, body, {
      headers,
    });
  }

  public registration(body: any): any {
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    return this.http.post(`${MAIN_URL}/api/register/`, body, {
      headers,
    });
  }

  public postReviews(productId: number, body: any): any {
    console.log(body);
    const headers = new HttpHeaders()
      .set('accept', 'application/json')
      .set('Content-Type', 'application/json');

    return this.http.post(`${MAIN_URL}/api/reviews/${productId}/`, body, {
      headers,
    });
  }

  public getProducts(): any {
    return this.http.get(`${MAIN_URL}/api/products`);
  }

  public getReviews(productId: number): any {
    return this.http.get(`${MAIN_URL}/api/reviews/${productId}`);
  }
}
