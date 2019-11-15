import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarBrandReturnFipe } from '../../interface/iCarBrandsReturn';
import { CarModelReturnFipe } from '../../interface/iCarModelReturn';
import { CarYearRequestFipe } from '../../interface/iCarYearReturn';
import { CarAllDataReturnFipe } from '../../interface/iCarAllDataReteurn';

@Injectable({
  providedIn: 'root'
})

export class SearchCarService {

  baseURLFipe = 'https://parallelum.com.br/fipe/api/v1/carros/';

  constructor(private http: HttpClient) { }

  getCarBrandsFipe() {
    return this.http.get<CarBrandReturnFipe[]>(this.baseURLFipe + 'marcas');
  }

  getCarModelFipe(idCarBrand) {
    return this.http.get<CarModelReturnFipe>(this.baseURLFipe + 'marcas/' + idCarBrand + '/modelos');
  }

  getCarYearFipe(idCarBrand, IdCarModel) {
    return this.http.get<CarYearRequestFipe[]>(this.baseURLFipe + 'marcas/' + idCarBrand + '/modelos/' + IdCarModel + '/anos');
  }

  getCarDataAllFipe(idCarBrand, IdCarModel, IdCarYear) {
    return this.http.get<CarAllDataReturnFipe>(this.baseURLFipe + 'marcas/' + idCarBrand + '/modelos/' + IdCarModel + '/anos/' + IdCarYear );
  }


}
