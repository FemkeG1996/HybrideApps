import { Component } from '@angular/core';
import { DeviceBatteryInfo, Plugins } from '@capacitor/core';

const { Device } = Plugins;
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  info: DeviceBatteryInfo;

  constructor() {}
ionViewWillEnter(){
  this.getInfo()
}
async getInfo(){

  this.info = await Device.getBatteryInfo();
}
}
