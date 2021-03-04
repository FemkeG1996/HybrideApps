import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
 data:string = '';
  constructor(private ds:DataService, private ls:LoginService, private router:Router) {}
ionViewWillEnter(){
  this.ds.getData().subscribe( data => this.data = data)
}
save(){
  this.ds.putData(this.data).subscribe(d =>{});
}
logout(){
this.ls.loggedIn == false;
this.router.navigateByUrl("/login")
}
}
