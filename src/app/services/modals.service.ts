import { Injectable } from '@angular/core';

import { MatDialog } from '@angular/material/dialog';

import { LoginModalComponent } from '../components/header/modals/login-modal/login-modal.component';
import { RegistrationModalComponent } from '../components/header/modals/registration-modal/registration-modal.component';
import { RequestsService } from './requests.service';

@Injectable({
  providedIn: 'root',
})
export class ModalsService {
  constructor(
    public dialog: MatDialog,
    private requestsService: RequestsService
  ) {}

  public openRegistrationDialog(): void {
    const dialogRef = this.dialog.open(RegistrationModalComponent, {
      width: '480px',
      minHeight: window.innerWidth > 536 ? '200px' : '100px',
    });
    dialogRef.afterClosed().subscribe((result: any) => {});
  }

  public openLoginDialog(): void {
    const dialogRef = this.dialog.open(LoginModalComponent, {
      width: '480px',
      minHeight: window.innerWidth > 536 ? '200px' : '100px',
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      this.requestsService.getProducts();
    });
  }

  public closeDialog(): void {
    this.dialog.closeAll();
  }
}
