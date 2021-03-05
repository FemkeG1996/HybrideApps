import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AdditemPage } from '../additem/additem.page';
import { DetailService } from '../services/detail.service';
import { SQLiteService } from '../services/sqlite.service';
import { TodoService } from '../services/to-do.service';
import { ToDoitem } from '../to-doitem';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public exConn: boolean;
  public exJson: boolean
  todos: ToDoitem[] = [];
  db : any;
  id: number
  constructor(private _sqlite: SQLiteService,private _detailService:DetailService , private modalController: ModalController, private tds: TodoService)
  {

  }

 async ionViewWillEnter() {
    this.exConn = this._detailService.getExistingConnection();
    this.exJson = this._detailService.getExportJson();
    console.log("**** ionViewWillEnter " + this.exConn);
    this.loadItems()
}
async loadItems(){
  this.todos = await this.tds.getItems();
}
async addItem(){

  let modal = await this.modalController.create({
    component: AdditemPage,
    cssClass: 'my-custom-class'
  });

  await modal.present();
  const{ data } = await modal.onDidDismiss();   //destruct. assignment - hier komt het item terug

  if(data){  
    // this.todos.push(data);   //we zetten het enkel nog maar in de array, dit gaat nog niet naar de db.
    this.todos = await this.tds.getItems();
  }
}
 async delete(id){
  await this.tds.deleteItems(id);
  this.todos = await this.tds.getItems();
}
}
