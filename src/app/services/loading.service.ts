import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private _loading = new BehaviorSubject<boolean>(false);
  public readonly loading$ = this._loading.asObservable();

  public showSpinner() {
    if (this._loading.value !== true) {
      this._loading.next(false);
    }
    this._loading.next(true);
  }
  public hideSpinner() {
    setTimeout(() => {
      this._loading.next(false);
    }, 500);
  }
}
