import { Injectable } from '@angular/core';
import { Land } from './land';

@Injectable({
  providedIn: 'root'
})
export class LandenService {
  public landen: Land[] =  [
    new Land('België', 'Brussel'),
    new Land("Nederland", "Amsterdam"),
    new Land("Spanje", "Madrid")
  ];

  constructor() {

  }
  public getLanden(): Land[]{
    return this.landen;
  }
  public addLand(l: Land){
    this.landen.push(l);
  }
}
