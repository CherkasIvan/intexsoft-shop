import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { RequestsService } from '../../../../services/requests.service';
import { ModalsService } from '../../../../services/modals.service';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.scss'],
})
export class LoginModalComponent implements OnInit {
  public loginForm!: FormGroup;
  public errorMessage?: string;

  constructor(
    public modal: ModalsService,
    public requestsService: RequestsService
  ) {}

  public createLoginForm() {
    this.loginForm = new FormGroup({
      loginName: new FormControl(null),
      loginPassword: new FormControl(null),
    });
  }

  public closeLogin(): any {
    this.loginForm.reset();
    this.modal.closeDialog();
  }

  public getAuthToken(token: any): void {
    this.requestsService.token$?.next(token);
  }

  public submitLogin(): any {
    let userName = this.loginForm.get('loginName')?.value;
    let userPassword = this.loginForm.get('loginPassword')?.value;
    let user = {
      username: userName,
      password: userPassword,
    };

    this.requestsService
      .authorization(JSON.stringify(user))
      .subscribe((el: any) => {
        if (el.success === true) {
          this.loginForm.reset();
          this.modal.closeDialog();
          console.log(el);
          sessionStorage.setItem('success', el.success);
          sessionStorage.setItem('token', el.token);
          this.getAuthToken(sessionStorage.getItem('token'));
          console.log(this.requestsService.token$?.value);
        } else {
          this.errorMessage = el.message;
        }
      });
  }

  ngOnInit(): void {
    this.createLoginForm();
  }
}
