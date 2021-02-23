import { Component } from '@angular/core';
import { Plugins, GeolocationPosition } from '@capacitor/core';

const { Geolocation } = Plugins;
import * as L from 'leaflet';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  longitude: number;
  latitude: number;
  nieuwLatitude: number;
  nieuwLongitude: number;

  constructor() { }

  ionViewDidEnter() {
    this.getPos()
  }

  async getPos() {
    const coordinates = await Geolocation.getCurrentPosition();
    this.longitude = coordinates.coords.longitude;
    this.latitude = coordinates.coords.latitude;

    var map = L.map('map').setView([this.latitude, this.longitude], 15);
    L.Icon.Default.imagePath = 'leaflet/'


    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // L.marker([this.latitude, this.longitude]).addTo(map)
    //   .bindPopup('Huidige Positie')
    //   .openPopup();

    var m = L.marker([this.latitude, this.longitude]).addTo(map)
    map.addLayer(m);


    const wait = Geolocation.watchPosition({ enableHighAccuracy: true, timeout: 100 }, (position, err) => {
     console.log(position);
     
      this.nieuwLatitude = position.coords.latitude;
      this.nieuwLongitude = position.coords.longitude;
      m.setLatLng([this.nieuwLatitude, this.nieuwLongitude]);

      map.setView([this.nieuwLatitude, this.nieuwLongitude],15);

    })

  }

}
