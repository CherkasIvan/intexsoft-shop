import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit {
  public products!: any;
  public thumbnail: any;

  constructor(
    private requestsService: RequestsService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit(): void {
    this.requestsService.getProducts().subscribe((el: any) => {
      this.products = el;
      this.products.forEach((element: { img: any }): any => {
        this.products.img = 'data:image/jpeg;base64,' + element.img;
        this.thumbnail = this.sanitizer.bypassSecurityTrustUrl(
          this.products.img
        );
        console.log(this.thumbnail);
      });
      console.log(el);
    });
  }
}
