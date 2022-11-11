import { Component, OnInit } from '@angular/core';

import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  public products!: any;

  constructor(private requestsService: RequestsService) {}

  public getProductsReviews(productId: any) {
    this.requestsService.getReviews(productId).subscribe((el: any) => {
      console.log(el);
    });
  }

  ngOnInit(): void {
    this.requestsService.getProducts().subscribe((el: any) => {
      this.products = el;
    });
  }
}
