import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  gerechten: any[] = [{naam:'Spaghetti Bolognese', foto: 'https://barcamessi.files.wordpress.com/2014/11/spaghetti-with-tomato-sauce.jpg' },
{naam: "Megamix Big Burger", foto: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/exps28800_UG143377D12_18_1b_RMS.jpg'}]

  constructor() {}

  klik(){
    console.log("opslaan knop geklikt")
  }
}
