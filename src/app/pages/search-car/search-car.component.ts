import { Component, OnInit, Renderer } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchCarService } from '../../services/search-car/search-car.service';
import { CarDateReferenceFipeReturn } from '../../interface/iCarDateReferenceReturn';
import { CarBrandReturnFipe } from '../../interface/iCarBrandsReturn';

import { TypeSearch } from '../../enum/type-search';

@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.scss']
})
export class SearchCarComponent implements OnInit {

  loader = false;
  countNumber = 0;
  user = {
    dateReference: null,
    brand: null
  };

  referenceDate = '';
  carBrand = '';
  seachCarForm: FormGroup;

  dataFipeReference: CarDateReferenceFipeReturn = null;
  dataFipeBrand: CarBrandReturnFipe = null;

  constructor(private searchCarService: SearchCarService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
    this.getDateReference();

  }

  selectAllTypeEventsFipe(event, typeSearch: any) {
    console.log('id => ', typeSearch);
    if (event !== '') {
      switch (typeSearch) {
        case TypeSearch.date: {
          this.getBrands({codigoTabelaReferencia: event, codigoTipoVeiculo: 1});
          break;
        }
        // case constant_expression2: {
        //   //statements;
        //   break;
        // }
        default: {
          //statements; 
          break;
        }
    }

    }
    console.log(event);
  }

  getDateReference() {
    this.searchCarService.getReferenceDateFipe().subscribe(
      response => {
        this.dataFipeReference = response;

      }, error => {
        console.log(error);
      }
    );
  }


  getBrands(idBrand) {
    this.searchCarService.postOfListCarBrandsFipe(idBrand).subscribe(
      response => {
        this.dataFipeBrand = response;

      }, error => {
        console.log(error);
      }
    );
  }

  buildForm() {
    this.seachCarForm = this.formBuilder.group({
      dateReference: [this.user.dateReference],
      brand: [this.user.brand]
    });
  }





  getAdressPerZipCode(zipCode) {
    this.loader = true;
    // this.searchService.getAdressPerZipCode(zipCode).subscribe(
    //   response => {
    //     if (response['erro']) {
    //       this.error = 'Cep Inválido';
    //       this.adress = null;
    //     } else {
    //       this.adress = response;
    //     }
    //     this.loader = false;

    //   }, error => {
    //     this.loader = false;
    //     this.error = error.mensagem;
    //   }
    // );
  }

}
