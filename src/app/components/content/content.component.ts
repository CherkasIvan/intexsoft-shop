import { Component, OnInit } from '@angular/core';

import { ModalsService } from '../../services/modals.service';
import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  public products!: any;
  public errorMessage?: string;
  public hideError: boolean = false

  constructor(
    private requestsService: RequestsService,
    private dialog: ModalsService
  ) { }

  public getProductsReviews(productId: any) {
    this.requestsService.productId$?.next(productId)

    if (!sessionStorage.getItem('token')) {
      this.errorMessage = 'You are not authorized. Do you want to log in?';
      return;
    }

    this.requestsService.getReviews(productId).subscribe((el: any) => {
      this.requestsService.products$.next(el);
      return el;
    });
  }

  openLogin() {
    this.ngOnInit();
    this.dialog.openLoginDialog();
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('token')) {
      this.requestsService.isLogin$?.next(true);
    }

    this.requestsService.getProducts().subscribe((el: any) => {
      this.products = el;
      return this.products;
    });

    this.requestsService.isLogin$?.subscribe(el => {
      this.hideError = el
    })
  }
}
