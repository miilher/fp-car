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
  //  dateReference: null,
    brand: null,
    model: null
  };

  referenceDate = '';
  carBrand = '';
  model = '';
  seachCarForm: FormGroup;

  dataFipeReference: CarDateReferenceFipeReturn = null;
  dataFipeBrand: CarBrandReturnFipe = null;
  dataModel: any = null;

  constructor(private searchCarService: SearchCarService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.buildForm();
    this.getBrands();

  }

  selectAllTypeEventsFipe(event, typeSearch: any) {
    console.log('id => ', typeSearch);
    if (event !== '') {
      switch (typeSearch) {
        case TypeSearch.brand: {
          //this.getBrands();
          this.getModel(event);
          break;
        }
        case TypeSearch.model: {
          this.getModel(event);
          //statements;
          break;
        }
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


  getBrands() {
    this.searchCarService.postOfListCarBrandsFipe().subscribe(
      response => {
        this.dataFipeBrand = response;

      }, error => {
        console.log(error);
      }
    );
  }

  getModel(idBrand) {
    this.searchCarService.postOfListCarModelsFipe(idBrand).subscribe(
      response => {
        this.dataModel = response.modelos;

      }, error => {
        console.log(error);
      }
    );
  }
  

  buildForm() {
    this.seachCarForm = this.formBuilder.group({
     // dateReference: [this.user.dateReference],
      brand: [this.user.brand],
      model: [this.user.model]
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
