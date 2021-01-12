import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styles: ['display:inline']
})
export class FooterComponent implements OnInit {


  constructor() {

   }

  ngOnInit(): void {
  }
getYear():number{
return new Date().getFullYear
();
}

}
