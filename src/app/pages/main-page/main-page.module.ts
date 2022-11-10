import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageRoutingModule } from './main-page-routing.module';
import { HeaderModule } from 'src/app/components/header/header.module';

import { MainPageComponent } from './main-page.component';

@NgModule({
  declarations: [MainPageComponent],
  exports: [MainPageComponent],
  imports: [CommonModule, MainPageRoutingModule, HeaderModule],
})
export class MainPageModule {}
