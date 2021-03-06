import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialModule } from '../../material.module';
import { SearchCarComponent } from '../../pages/search-car/search-car.component';
import { DetailCarComponent } from '../../pages/search-car/detail-car/detail-car.component';
import { LoaderComponent } from '../../components/loader/loader.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


describe('SearchCarComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchCarComponent,
        DetailCarComponent,
        LoaderComponent
      ],
      imports: [
        CommonModule,
        BrowserAnimationsModule,
        MatNativeDateModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ],
    })
      .compileComponents();
  }));

});
