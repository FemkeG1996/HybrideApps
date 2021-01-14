import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { gebruiker } from './gebruiker';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  //  teller : number = 0
  public voornaam:string = '';
  //  mail:string = ''
  //  afb:string = ''
  // titel: string = 'Toon Gegevens'
    // aan = true ;
  users: gebruiker[] = [];

  constructor() {
    // this.getal();
    
  }

  ngOnInit(): void {
  }

  addUser(vn: HTMLInputElement , an: HTMLInputElement, ww: HTMLInputElement): void {
   let g : gebruiker = new gebruiker(vn.value, an.value, ww.value);
   this.users.push(g);
   vn.value = '';
   an.value = '';
   ww.value = '';
  }
  reset(){   
    this.users= [];
  }

  knop(){
    if(this.voornaam ==''){
      return true;
    } else {
      return false;
    }
  }
  // getal(){
  //  setInterval(() => {this.teller++},1000)
  // }
  // naamwijzig(){
  //   this.naam = (document.getElementById('naam') as HTMLInputElement).value;
  // }
  // gegevens(){

  // if(this.aan){
  //   this.aan = false
  //   this.titel= 'Toon Gegevens'
  // }
  // else{
  //   this.aan = true;
  //   this.titel= 'Verberg Gegevens'
  // }

  // }
  // reset(){
  //   this.naam = '' ;
  //   this.mail = '' ;
  //   this.afb = '';
  //   this.aan= false;
  // }




}
