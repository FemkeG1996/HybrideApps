import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Itemslist } from '../itemslist';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  apikey = 'AIzaSyA3eKv9nPpklnHF0-Z0MRFkwkVKAa3bw6M';
  loggedIn: boolean = false;
  idToken = '';
  userId = '';
  username = '';
  login(user: string, pass: string){
    const data = {email : user , password: pass, returnSecureToken: true};
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+ this.apikey, data);
  }
  registreer(user: string, pass: string, us:string){
    const data = {email : user , password: pass,displayName: us, returnSecureToken: true};
    return this.http.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+ this.apikey, data);
  }
  getItems():Observable<Itemslist[]>{
    return this.http.get<Itemslist[]>("https://gebruiker-c5c2b-default-rtdb.europe-west1.firebasedatabase.app/items.json?auth="+this.idToken)
    .pipe(
      map(data => {
        const newData: Itemslist[] = [];
        for (let i in data) {
          let item = new Itemslist();
          item.username = data[i].username;
          item.tekst = data[i].tekst;
          newData.push(item);
        }
        return newData;
      })
    )
  }
  getItem():Observable<Itemslist[]>{
    return this.http.get<Itemslist[]>("https://gebruiker-c5c2b-default-rtdb.europe-west1.firebasedatabase.app/items.json?auth="+this.idToken)
    .pipe(
      map(data => {
        const newData: Itemslist[] = [];

        for (let i in data) {
          let item = new Itemslist();
          item.tekst = data[i].tekst;
          if(this.username == data[i].username){
            item.username = data[i].username;
            newData.push(item)
          }
        }
        return newData;
      })
    )
  }
   addMessage(tekst: string){
     const data = new Itemslist();
     data.tekst = tekst;
     data.username = this.username;
     data.userid = this.userId;
    return this.http.post('https://gebruiker-c5c2b-default-rtdb.europe-west1.firebasedatabase.app/items.json?auth='+ this.idToken, data)
  }

  autoLogin(){
    if(localStorage.getItem('logingegevens') != null){
      let gegevens = JSON.parse(localStorage.getItem('logingegevens'));
      this.idToken = gegevens.token;
      this.loggedIn = true;
      this.userId = gegevens.userId;
    }
  }

}
