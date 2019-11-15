import { Component, OnInit, Input } from '@angular/core';
import { CarAllDataReturnFipe } from '../../../interface/iCarAllDataReteurn';

@Component({
  selector: 'app-detail-car',
  templateUrl: './detail-car.component.html',
  styleUrls: ['./detail-car.component.scss']
})
export class DetailCarComponent implements OnInit {

  @Input()
  veiculo: CarAllDataReturnFipe;

  constructor() { }

  ngOnInit() {
  }

}
