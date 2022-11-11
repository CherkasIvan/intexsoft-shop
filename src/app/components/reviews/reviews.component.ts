import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { RequestsService } from '../../services/requests.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
})
export class ReviewsComponent implements OnInit {
  public stars: number[] = [1, 2, 3, 4, 5];
  public selectedValue!: number;
  public slides?: any;
  public reviewGroup!: FormGroup;
  public show: boolean = false;

  public createReviewForm() {
    this.reviewGroup = new FormGroup({
      userReview: new FormControl(''),
    });
  }
  public clearReview() {
    this.selectedValue = 0;
    this.reviewGroup.patchValue({ userReview: '' });
  }
  public sendReview(body: any) {
    let userReview = this.reviewGroup.get('userReview')?.value;
    let id = this.requestsService.productId$?.value;
    let rate = {
      rate: body,
      text: userReview,
    };
    this.requestsService
      .postReviews(id, JSON.stringify(rate))
      .subscribe((el: any) => {
        el;
      });
    this.clearReview();
  }
  constructor(public requestsService: RequestsService) {}

  countStar(star: number) {
    this.selectedValue = star;
  }

  ngOnInit(): void {
    if (sessionStorage.getItem('token')) {
      this.show = true;
      this.createReviewForm();
      this.requestsService.products$.subscribe((el) => {
        this.slides = el;
        return this.slides;
      });
    }
  }
}
