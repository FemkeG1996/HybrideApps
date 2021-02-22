import { Component } from '@angular/core';
import { FrituurService } from '../frituur.service';
import { Snack } from '../snack';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  frituursnacks: Snack[] = []

  constructor(private fs:FrituurService) {}
  ngOnInit() {

    }
  
    ionViewDidEnter(){

      this.fs.getSnacks().subscribe(data => { this.frituursnacks = data})
    }
  }

