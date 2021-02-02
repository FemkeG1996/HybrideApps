import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { City } from '../city';
import { CityService } from '../city.service';

@Component({
  selector: 'app-lijst',
  templateUrl: './lijst.component.html',
  styleUrls: ['./lijst.component.scss']
})
export class LijstComponent implements OnInit {
//cities : City[] = [];
cities$: Observable<City[]>;

selectedcity: City;

  constructor(private cityService:CityService) { }

  ngOnInit(): void {
  this.cities$ =  this.cityService.getCities();
  }
showDetail(city : City){
  this.selectedcity = city;
}
updateRating(rating:number){
  if(this.selectedcity.rating == undefined)
  {
    this.selectedcity.rating = 0;
  }
  this.selectedcity.rating += rating;
}
}
