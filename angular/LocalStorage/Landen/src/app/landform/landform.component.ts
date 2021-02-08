import { Component, OnInit } from '@angular/core';
import { Land } from '../land';
import { LandenService } from '../landen.service';
import { Landen2Service } from '../landen2.service';

@Component({
  selector: 'app-landform',
  templateUrl: './landform.component.html',
  styleUrls: ['./landform.component.scss']
})
export class LandformComponent implements OnInit {
  public n2: string;
  public h2: string;
  constructor(private ls: Landen2Service) { }

  ngOnInit(): void {
  }

  public opslaan(naam: HTMLInputElement, hoofdstad: HTMLInputElement) {
    let land: Land = new Land(naam.value, hoofdstad.value);
    this.ls.addLand(land);
  }
  public opslaan2(){
    let land: Land = new Land(this.n2,this.h2);
    this.ls.addLand(land);

  }

}
