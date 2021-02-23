import { Component, NgZone } from '@angular/core';
import { NetworkStatus, Plugins } from '@capacitor/core';

const { Network } = Plugins;

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  status : NetworkStatus;

  constructor(private ngZone: NgZone) {}


  ionViewWillEnter(){
    this.getInfo()
  }
  
  async getInfo(){   
 this.status= await Network.getStatus();
 let handler = Network.addListener('networkStatusChange', (status) => {
  console.log("Network status changed", status);
});
 let listener= Network.addListener('networkStatusChange', (status) => {
  this.ngZone.run(() =>{
     this.status = status;
  })
});
  }
}
