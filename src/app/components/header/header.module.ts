import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { RegistrationModalComponent } from './modals/registration-modal/registration-modal.component';
import { LoginModalComponent } from './modals/login-modal/login-modal.component';

import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    HeaderComponent,
    RegistrationModalComponent,
    LoginModalComponent,
  ],
  exports: [HeaderComponent],
  imports: [CommonModule, SharedModule],
})
export class HeaderModule {}