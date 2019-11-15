import { TestBed } from '@angular/core/testing';

import { SearchCarService } from './search-car.service';

describe('SearchCarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchCarService = TestBed.get(SearchCarService);
    expect(service).toBeTruthy();
  });
});
