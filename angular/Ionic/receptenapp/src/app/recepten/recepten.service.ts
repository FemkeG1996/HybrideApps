import { Injectable } from '@angular/core';
import { Recept } from './recept';

@Injectable({
  providedIn: 'root'
})
export class ReceptenService {
private recepten: Recept[] =[
  {
    id: "1",
    img: "https://static.ah.nl/static/recepten/img_RAM_PRD127474_1024x748_JPG.jpg",
    naam: "Spaghetti Bolognese",
    ingredienten: "ui, pasta, tomaten"
  },
  {
    id: "2",
    img: "https://img.static-rmg.be/a/food/image/q75/w640/h400/1077806/pizza.jpg",
    naam: "Pizza Margarita",
    ingredienten: "deeg,tomaten, basilicum"
  }
];
  constructor() { }

  getRecepten() : Recept[]{
    return this.recepten;
  }
  getRecept(id:string): Recept{
   return this.recepten.find( recept => recept.id === id);
  }
  deleteRecept(id:string):void{
   this.recepten = this.recepten.filter(recept => recept.id !== id);
  }
  addRecept(recept:Recept){
    let maxid = 0;
    this.recepten.map(
      recept =>{
        if (parseInt(recept.id) > maxid){
        maxid = parseInt(recept.id)
      };
    }
    )
    maxid++;
    recept.id = maxid.toString();
    this.recepten.push(recept);
  }
  updateRecept(recept:Recept){
    for(let i in this.recepten){
      if(this.recepten[i].id == recept.id)
      {
        this.recepten[i] = recept;
      }
    }
  }
}
