import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { SpinnerComponent } from './spinner.component';

@NgModule({
  declarations: [SpinnerComponent],
  exports: [SpinnerComponent],
  imports: [CommonModule, MatProgressSpinnerModule],
})
export class SpinnerModule { }
