import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
   teller : number = 0
   naam: string = ''
   mail:string = ''
   afb:string = ''
   titel:string = 'Toon Gegevens'
   aan = false ;
  constructor() {
    this.getal();
   }

  ngOnInit(): void {
  }
getal(){
 setInterval(() => {this.teller++},1000)
}
naamwijzig(){
  this.naam = (document.getElementById('naam') as HTMLInputElement).value;
}
gegevens(){

if(this.aan){
  this.aan = false
  this.titel= 'Toon Gegevens'
}
else{
  this.aan = true;
  this.titel= 'Verberg Gegevens'
}

}
reset(){
  this.naam = '' ;
  this.mail = '' ;
  this.afb = '';
  this.aan= false;
}

}
