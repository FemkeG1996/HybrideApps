import { Component, OnInit } from '@angular/core';
import { GerechtService } from '../gerecht.service';
import { Ingredient } from '../ingredient';
import { Menuoverzicht } from '../menuoverzicht';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {


menu: Menuoverzicht[] = [];
ingredienten : Ingredient[]=[];

constructor(private gerechtenservice:GerechtService)
{
  this.gerechtenservice.getIngredienten().subscribe(data=> {this.ingredienten = data});
}

  ngOnInit(): void {

  }

  zoeken(zoekterm:string, type:number){
    this.gerechtenservice.getGerechten(zoekterm, type).subscribe(data => {this.menu = data});
  }

  toonIngredienten(gerecht:GerechtService){
    let str:string = '';
for(let i = 1; i< 20; i++){
  if(gerecht['strIngredient' + i] == null || gerecht['strIngredient' + i] == '') break;

  str+= gerecht['strIngredient' +i] + ' : ' + gerecht['strMeasure' + i] + "\n"
}
alert(str);
  }
}
