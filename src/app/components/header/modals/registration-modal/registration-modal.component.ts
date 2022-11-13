import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { RequestsService } from '../../../../services/requests.service';
import { ModalsService } from '../../../../services/modals.service';

@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.scss'],
})
export class RegistrationModalComponent implements OnInit {
  public registrationForm!: FormGroup;
  public errorMessage?: string;

  constructor(
    public modal: ModalsService,
    public requestsService: RequestsService
  ) { }

  public createLoginForm() {
    this.registrationForm = new FormGroup({
      registrationName: new FormControl(null),
      registrationPassword: new FormControl(null),
    });
  }

  public submitRegistration(): any {
    let userName = this.registrationForm.get('registrationName')?.value;
    let userPassword = this.registrationForm.get('registrationPassword')?.value;
    let user = {
      username: userName,
      password: userPassword,
    };

    this.requestsService
      .registration(JSON.stringify(user))
      .subscribe((el: any) => {
        if (el.success === true) {
          this.registrationForm.reset();
          this.modal.closeDialog();
          this.modal.openLoginDialog()
        } else {
          this.errorMessage = el.message;
        }
      });
  }

  public closeRegistration(): any {
    this.registrationForm.reset();
    this.modal.closeDialog();
  }

  ngOnInit(): void {
    this.createLoginForm();
  }
}
