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

  baseURLFipe = 'http://veiculos.fipe.org.br/api/veiculos/';

  constructor(private http: HttpClient) { }

  getReferenceDateFipe() {
    return this.http.post<CarDateReferenceFipeReturn>(this.baseURLFipe + 'ConsultarTabelaDeReferencia', null);
  }

  postOfListCarBrandsFipe(dataOfCarBrands) {
    return this.http.post<CarBrandReturnFipe>(this.baseURLFipe + 'ConsultarMarcas', dataOfCarBrands);
  }

  postOfListCarModelsFipe(dataOfCarModel) {
    return this.http.post<CarModelReturnFipe>(this.baseURLFipe + 'ConsultarModelos', dataOfCarModel);
  }

  postOfListYearModelFipe(dataOfCarYearModel) {
    return this.http.post<CarYearModelRequestFipe>(this.baseURLFipe + 'ConsultarAnoModelo', dataOfCarYearModel);
  }

}
