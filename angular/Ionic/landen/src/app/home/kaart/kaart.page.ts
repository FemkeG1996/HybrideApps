import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Land } from 'src/app/land';
import { ZoekService } from 'src/app/zoek.service';
import { Plugins, GeolocationPosition } from '@capacitor/core';

const { Geolocation } = Plugins;
import * as L from 'leaflet';
@Component({
  selector: 'app-kaart',
  templateUrl: './kaart.page.html',
  styleUrls: ['./kaart.page.scss'],
})
export class KaartPage implements OnInit {

  positie: Land = new Land();
  longitude: number;
  latitude: number;
  constructor(private ar: ActivatedRoute, private zs: ZoekService) { }

  ngOnInit(){
  
  }

  ionViewWillEnter(){
    this.ar.params.subscribe(val => {
      this.latitude = history.state.latlng[0];
      this.longitude = history.state.latlng[1];
      this.showMap();
    });
  }

  async showMap() {

    var map = L.map('map').setView([this.latitude, this.longitude], 7);
    L.Icon.Default.imagePath = 'leaflet/'


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // L.;marker([this.latitude, this.longitude]).addTo(map)
    //   .bindPopup('Huidige Positie')
    //   .openPopup()

    var m = L.marker([this.latitude, this.longitude]).addTo(map)
    map.addLayer(m);


  }

}

