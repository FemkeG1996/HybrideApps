import { Component, OnInit } from '@angular/core';
import { Recept } from './recept';
import { ReceptenService } from './recepten.service';

@Component({
  selector: 'app-recepten',
  templateUrl: './recepten.page.html',
  styleUrls: ['./recepten.page.scss'],
})
export class ReceptenPage implements OnInit {

  recepten: Recept[] = [];

  constructor(private receptenservice: ReceptenService) { }

  ngOnInit() {
    // this.recepten = this.receptenservice.getRecepten();
  }
  ionViewWillEnter(){
    this.recepten = this.receptenservice.getRecepten();
  }
}
