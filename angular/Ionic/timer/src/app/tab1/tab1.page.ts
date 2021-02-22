import { Component } from '@angular/core';
import { timer } from 'rxjs';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
seconden = 0;
start = 0;
percentage = 0;
halt = false;
timer: any;
constructor() {}

  startTimer(){
    this.halt = false;
    Number(this.seconden);
     this.timer = setInterval(
      () =>
      { if(this.seconden > 0)  {
        this.seconden--;
        this.percentage = 100 - ((this.seconden/this.start )* 100);
        if(this.seconden ==0){
          clearInterval(this.timer);
          let audio = new Audio('/assets/music/mario.wav')
          audio.play();
       
        } return timer;
      }  
      }, 1000
    )
    
  }
  pause(){
    this.halt = true;
    clearInterval(this.timer);

  }
  reset(){
    this.seconden = 0;
    this.percentage = 0;
    clearInterval(this.timer);
  }
  setStart(){
    this.start = this.seconden;
  }
}
