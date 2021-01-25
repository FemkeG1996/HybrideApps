import { Component,EventEmitter, Input, OnInit, Output } from '@angular/core';
import { City } from '../city';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
@Input() city: City;
@Output() rating = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }
rate(num:number){
this.rating.emit(num);
}
}
