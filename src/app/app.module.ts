import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpSetHeaders } from './interceptors/http-interceptor';

import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { SearchCarComponent } from './pages/search-car/search-car.component';
import { DetailCarComponent } from './pages/search-car/detail-car/detail-car.component';
import { LoaderComponent } from './components/loader/loader.component';

import { MzSelectModule } from 'ngx-materialize';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    SearchCarComponent,
    DetailCarComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MzSelectModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    // { provide: HTTP_INTERCEPTORS, useClass: HttpSetHeaders, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
