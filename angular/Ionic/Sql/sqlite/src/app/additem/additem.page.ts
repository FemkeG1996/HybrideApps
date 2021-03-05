import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoService } from '../services/to-do.service';
import { ToDoitem } from '../to-doitem';

@Component({
  selector: 'app-additem',
  templateUrl: './additem.page.html',
  styleUrls: ['./additem.page.scss'],
})
export class AdditemPage implements OnInit {

  todo : ToDoitem = new ToDoitem();

  constructor(private modalController: ModalController, private tds:TodoService) { }

  ngOnInit(): void {

  }
  async ionViewWillEnter() {
  }

  close(){   //oproepen bij het klikken van het kruisje rechtsboven
    this.modalController.dismiss();
  }
  save(){   //oproepen bij het klikken op de knop
    this.tds.addItem(this.todo)
    this.modalController.dismiss(this.todo);
    //dit geeft aan wat er terug moet komen bij een dismiss. Dat zal het item zijn dat je hebt aangepast via 2way binding/ngmodel
  }
}
