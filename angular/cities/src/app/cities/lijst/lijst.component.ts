import { Component, OnInit } from '@angular/core';
import { City } from '../city';

@Component({
  selector: 'app-lijst',
  templateUrl: './lijst.component.html',
  styleUrls: ['./lijst.component.scss']
})
export class LijstComponent implements OnInit {
cities : City[] = [
{
  id:1,
name: 'Leuven',
provincie: 'Vlaams-Brabant',
highlights: ["Begijnhof", "Kruidtuin"],
rating : 5
},
{
  id: 2,
  name: 'Diest',
  provincie: "Vlaams-Brabant",
  highlights: ['Citadel','Begijnhof'],
  rating : 4
}
];
selectedcity: City;
  constructor() { }

  ngOnInit(): void {
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
