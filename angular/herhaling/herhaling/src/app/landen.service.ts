import { Injectable } from '@angular/core';
import { Land } from './land';

@Injectable({
  providedIn: 'root'
})
export class LandenService {
  public arrLanden: Land[] = [];;

  constructor() { }

  getLanden(){
return this.arrLanden
  }

  addLanden(land: string, hoofdstad: string){
    let l = new Land(land, hoofdstad);
    this.arrLanden.push(l);
    console.log(this.arrLanden);
  }
}
