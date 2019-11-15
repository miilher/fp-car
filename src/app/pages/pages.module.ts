import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesComponent } from '../pages/pages.component';

import { SearchCarModule } from '../pages/search-car/search-car.module';

@NgModule({
  declarations: [
    PagesComponent,
  ],
  imports: [
    CommonModule,
    SearchCarModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  exports: [
    PagesComponent
  ]

})
export class PagesModule { }
