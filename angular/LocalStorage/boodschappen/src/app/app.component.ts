import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'boodschappen';
  item : string = '';
  lijst : string[] = []

ngOnInit(){
  this.Toon();
}

VoegToe(item: string){
  localStorage.setItem('lijst',item)
  this.lijst.push(item);
  localStorage.setItem("lijst", JSON.stringify(this.lijst))
}
Toon(){
  if(localStorage.getItem("lijst") != null){
  this.lijst = JSON.parse(localStorage.getItem("lijst"));
  }
}
Reset(){
  this.lijst = [];
}
}