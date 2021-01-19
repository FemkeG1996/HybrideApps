import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'debug';
  waarde = 'blanco';
constructor(){
  this.waarde = 'Lege waarde'
}

  wijzig(waarde : string){
this.waarde = waarde;
  }
}
