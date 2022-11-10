import { Component } from '@angular/core';

import { ModalsService } from '../../services/modals.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(public dialog: ModalsService) {}

  openRegistration() {
    this.dialog.openRegistrationDialog();
  }
  openLogin() {
    this.dialog.openLoginDialog();
  }
}
