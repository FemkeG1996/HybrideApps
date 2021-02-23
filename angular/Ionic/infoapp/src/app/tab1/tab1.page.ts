import { Component } from '@angular/core';
import { DeviceInfo, Plugins } from '@capacitor/core';

const { Device } = Plugins;
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  deviceInfo: DeviceInfo;

  constructor() { }

  ionViewWillEnter() {
    this.getInfo();
  }

  async getInfo() {
    this.deviceInfo = await Device.getInfo();

  }
}
