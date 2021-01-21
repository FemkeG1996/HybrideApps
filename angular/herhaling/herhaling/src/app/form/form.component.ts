import { Component, OnInit } from '@angular/core';
import { LApiService } from '../l-api.service';
import { LandenService } from '../landen.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public land:string = '';
  public hoofdstad:string = '';
  constructor(public Ls : LApiService) { }

  ngOnInit(): void {
  }
  opslaan(): void{
    this.Ls.addLanden(this.land, this.hoofdstad);
    // console.log(this.land + ' ' +this.hoofdstad);
    // this.land = '';
    // this.hoofdstad = '' ;
  }
opslaan2(pland: string , phoofdstad:string): void{
  console.log(pland + ' ' + phoofdstad);
  pland = '';
  phoofdstad = '';
}
}
