import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
@Component({
  selector: 'app-items',
  templateUrl: './items.page.html',
  styleUrls: ['./items.page.scss'],
})
export class ItemsPage implements OnInit {
  ItemsList = [];
  
  constructor(private ls:LoginService) { }

  ngOnInit() {
  
  }
addMessage(tekst: HTMLInputElement){
  this.ls.addMessage(tekst.value).subscribe(data => {tekst.value =''});
  
}
IonViewWillEnter(){
  this.ls.getItems().subscribe(data => { this.ItemsList = data})
}
getAll(){
  this.ls.getItems().subscribe(data => { this.ItemsList = data})
}
getMine(){
  this.ls.getItem().subscribe(data => { this.ItemsList = data})
}
segmentChanged(ev: any) {
  console.log('Segment changed', ev);
}
}
