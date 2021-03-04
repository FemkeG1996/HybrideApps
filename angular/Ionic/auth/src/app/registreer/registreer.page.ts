import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-registreer',
  templateUrl: './registreer.page.html',
  styleUrls: ['./registreer.page.scss'],
})
export class RegistreerPage implements OnInit {

  constructor(private ls:LoginService, private router:Router) { }

  ngOnInit() {
  }
  registreer(f:NgForm) {
    let u=f.controls["email"].value;
    let p= f.controls["pass"].value;
    let us= f.controls["name"].value;
    this.ls.registreer(u, p, us).subscribe(data => {
      this.ls.idToken = data['idToken'];
      this.ls.userId = data['localId'];
      this.ls.username = data['displayName'];
      this.ls.loggedIn = true;
      this.router.navigateByUrl('/home');
    }, err => console.log('Registreren Mislukt', err.error.error.message)
    )
  };
}
