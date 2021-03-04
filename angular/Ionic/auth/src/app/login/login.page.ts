import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private ls: LoginService, private router: Router, public ac: AlertController) { }

  ngOnInit() {
    this.ls.autoLogin();
    if(this.ls.loggedIn){
      this.router.navigateByUrl('/home');
    }
  }
  login(f: NgForm) {
    let u=f.controls["email"].value;
    let p= f.controls["pass"].value;
    this.ls.login(u,p).subscribe(data => {
      this.ls.idToken = data['idToken'];
      this.ls.userId = data['localId'];
      this.ls.username = data['displayName'];
      this.ls.loggedIn = true;

      let gegevens = {token: this.ls.idToken, userId: this.ls.userId};
      localStorage.setItem('logingegevens', JSON.stringify(gegevens));

      this.router.navigateByUrl('/home');
    },
    async err =>
    {
      let bericht: string;
      if(err.error.error.message =="INVALID_EMAIL" 
      || err.error.error.message =="EMAIL_NOT_FOUND" ){
        bericht="E-mail ongeldig";
        f.controls["email"].setErrors({"incorrect": true});
      }
      else if(err.error.error.message =="INVALID_PASSWORD"){
        bericht="Wachtwoord ongeldig";
        f.controls["pass"].setErrors({"incorrect": true});
      }
      const alert = await this.ac.create({
        header: 'Alert',
        subHeader: '',
        message: 'Fout bij Inloggen: ' + bericht,
        buttons: ['OK']
      });
      await alert.present();
    } 
    // console.log('Login Mislukt', err.error.error.message)
    );

  }

}
