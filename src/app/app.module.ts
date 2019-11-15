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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';



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
    BrowserAnimationsModule,
    MaterialModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
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
