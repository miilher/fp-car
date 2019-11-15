import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detail-car',
  templateUrl: './detail-car.component.html',
  styleUrls: ['./detail-car.component.scss']
})
export class DetailCarComponent implements OnInit {
  
  @Input()
  adress;

  constructor() { }

  ngOnInit() {
  }

}
