import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../../shared/shared.module';

import { HeaderComponent } from './header.component';
import { RegistrationModalComponent } from './modals/registration-modal/registration-modal.component';
import { LoginModalComponent } from './modals/login-modal/login-modal.component';

@NgModule({
  declarations: [
    HeaderComponent,
    RegistrationModalComponent,
    LoginModalComponent,
  ],
  exports: [HeaderComponent],
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
})
export class HeaderModule { }
