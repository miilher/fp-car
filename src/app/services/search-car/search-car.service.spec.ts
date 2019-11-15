import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs'; // Add import
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CarModelReturnFipe } from '../../interface/iCarModelReturn';

import { SearchCarService } from './search-car.service';

describe('SearchCarService', () => {

  let service: SearchCarService = TestBed.get(SearchCarService);

  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule],
    providers: [service]
  }));

  service = TestBed.get(SearchCarService);

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getBrands', () => {
    it('show collection models', () => {
      const idBrand = '123';
      const modelResponse: CarModelReturnFipe = {
        modelos: { nome: 'Buggy IV e V', codigo: 4053 },
        anos: { nome: '32000 Gasolina', codigo: '32000-1' }
      };


      let result;
      spyOn(service, 'getCarModelFipe').and.returnValue(of(modelResponse));

      service.getCarModelFipe(idBrand).subscribe(
        response => {
          result = response;
        }, error => {

        }
      );

      expect(result.modelos[0]).toEqual(modelResponse.modelos);
      expect(result.anos[0]).toEqual(modelResponse.anos);
    });

  });
});
