import { Component } from '@angular/core';
import { RequestsService } from './services/requests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private requestsService: RequestsService) {}
  user = {
    username: 'Ivan',
    password: '1111',
  };

  review = {
    rate: 5,
    text: "Ips"
  };

  ngOnInit(): void {

    // this.requestsService
    //   .postReviews(1, JSON.stringify(this.review))
    //   .subscribe((el: any) => {
    //     console.log(el);
    //   });



  }
}
