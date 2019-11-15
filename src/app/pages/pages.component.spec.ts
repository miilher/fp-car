import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesComponent } from './pages.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SearchCarModule } from '../pages/search-car/search-car.module';

describe('PagesComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
    })
    .compileComponents();
  }));

});
