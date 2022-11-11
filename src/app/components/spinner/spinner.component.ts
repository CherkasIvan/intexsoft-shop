import { Component } from '@angular/core';

import { Observable } from 'rxjs';
import { LoadingService } from '../../services/loading.service';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent {
  public value: number = 100;
  public diameter: number = 100;
  public strokeWidth: number = 3;
  public color: string = 'primary';

  public loading$: Observable<boolean> = this.loader.loading$;
  public isLoading: boolean = true;

  constructor(public loader: LoadingService) {}
}
