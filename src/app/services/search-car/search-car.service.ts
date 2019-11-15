import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarDateReferenceFipeReturn } from '../../interface/iCarDateReferenceReturn';
import { CarBrandReturnFipe } from '../../interface/iCarBrandsReturn';
import { CarModelReturnFipe } from '../../interface/iCarModelReturn';
import { CarYearModelRequestFipe } from '../../interface/iCarYearModelReturn';

@Injectable({
  providedIn: 'root'
})

export class SearchCarService {

  baseURLFipe = 'https://parallelum.com.br/fipe/api/v1/carros/';

  constructor(private http: HttpClient) { }

  getReferenceDateFipe() {
    return this.http.post<CarDateReferenceFipeReturn>(this.baseURLFipe + 'ConsultarTabelaDeReferencia', null);
  }

  postOfListCarBrandsFipe() {
    return this.http.get<any>(this.baseURLFipe + 'marcas');
  }

  postOfListCarModelsFipe(dataOfCarModel) {
    return this.http.get<any>(this.baseURLFipe + 'marcas/' + dataOfCarModel + '/modelos');
  }

  postOfListYearModelFipe(dataOfCarYearModel) {
    return this.http.post<CarYearModelRequestFipe>(this.baseURLFipe + 'ConsultarAnoModelo', dataOfCarYearModel);
  }

}
