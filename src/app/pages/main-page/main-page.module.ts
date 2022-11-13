import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MainPageRoutingModule } from './main-page-routing.module';
import { HeaderModule } from '../../components/header/header.module';

import { MainPageComponent } from './main-page.component';
import { ContentComponent } from '../../components/content/content.component';
import { ReviewsComponent } from '../../components/reviews/reviews.component';

@NgModule({
  declarations: [MainPageComponent, ContentComponent, ReviewsComponent],
  exports: [MainPageComponent],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    HeaderModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class MainPageModule { }
