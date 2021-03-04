import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Land } from '../land';
import { ZoekService } from '../zoek.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  Landen: Land[] = [];
  land: '';
  
  constructor(private zs:ZoekService, private router:Router) {}

  ionViewWillEnter(){
// this.zoekLand(this.land);
    }

  zoekLand(land:string){
    if(land.length > 4){this.zs.zoekLanden(land).subscribe( data => {this.Landen = data})}
    
  }
naarMap(latlng){
  this.router.navigateByUrl('home/kaart', { state: { latlng: latlng } })
}

}
