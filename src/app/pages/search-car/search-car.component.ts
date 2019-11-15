import { Component, OnInit, Renderer } from '@angular/core';
import { AbstractControl, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchCarService } from '../../services/search-car/search-car.service';
import { CarBrandReturnFipe } from '../../interface/iCarBrandsReturn';
import { CarModelReturnFipe, CarOnlyModelReturnFipe } from '../../interface/iCarModelReturn';
import { CarYearRequestFipe } from '../../interface/iCarYearReturn';
import { CarAllDataReturnFipe } from '../../interface/iCarAllDataReteurn';
import { MatSnackBar } from '@angular/material/snack-bar';

import { TypeSearch } from '../../enum/type-search';

@Component({
  selector: 'app-search-car',
  templateUrl: './search-car.component.html',
  styleUrls: ['./search-car.component.scss']
})
export class SearchCarComponent implements OnInit {

  loader = false;
  referenceDate = '';
  carBrand = '';
  model = '';
  year = '';
  seachCarForm: FormGroup;

  dataFipeBrand: CarBrandReturnFipe[] = null;
  dataModel: CarModelReturnFipe = null;
  refineLoadOnlyModels: any;
  dataYear: CarYearRequestFipe[] = null;
  allDataCar: CarAllDataReturnFipe = null;

  constructor(private searchCarService: SearchCarService,
              private formBuilder: FormBuilder,
              private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.getBrands();
  }

  isDisable(modelInput) {
    if (modelInput === '') {
      return 'disabled';
    } else {
      return;
    }
  }

  openSnackBarError(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  selectAllTypeEventsFipe(event, typeSearch: any) {
    if (event.value !== '') {
      switch (typeSearch) {
        case TypeSearch.brand: {
          this.getModel(event.value);
          break;
        }
        case TypeSearch.model: {
          this.getYear(this.carBrand, event.value);
          break;
        }
        case TypeSearch.year: {
          this.getAllDataCar(this.carBrand, this.model, event.value);
          break;
        }
        default: {
          break;
        }
      }

    }
  }



  getBrands() {
    this.loader = true;
    this.searchCarService.getCarBrandsFipe().subscribe(
      response => {
        this.dataFipeBrand = response;
        this.loader = false;
      }, error => {
        this.loader = false;
        this.openSnackBarError('Não Foi Possivel Carregar as Marcas', null);
        console.log(error);
      }
    );
  }

  getModel(idBrand) {
    this.loader = true;
    this.searchCarService.getCarModelFipe(idBrand).subscribe(
      response => {
        this.dataModel = response;
        this.refineLoadOnlyModels = this.dataModel.modelos;
        this.model = '';
        this.year = '';
        this.loader = false;

      }, error => {
        this.carBrand = '';
        this.model = '';
        this.year = '';
        this.loader = false;
        this.openSnackBarError('Não Foi Possivel Carregar os Modelos', null);
        console.log(error);
      }
    );
  }

  getYear(idBrand, idModel) {
    this.loader = true;
    this.searchCarService.getCarYearFipe(idBrand, idModel).subscribe(
      response => {
        this.dataYear = response;
        this.loader = false;

      }, error => {
        this.year = '';
        this.loader = false;
        this.openSnackBarError('Não Foi Possivel Carregar os Anos', null);
        console.log(error);
      }
    );
  }

  getAllDataCar(idBrand, idModel, idYear) {
    this.loader = true;
    this.searchCarService.getCarDataAllFipe(idBrand, idModel, idYear).subscribe(
      response => {
        this.allDataCar = response;
        this.loader = false;
      }, error => {
        this.carBrand = '';
        this.model = '';
        this.year = '';
        this.loader = false;
        this.openSnackBarError('Não Foi Possivel Carregar a ficha do Carro', null);
        console.log(error);
      }
    );
  }

}
