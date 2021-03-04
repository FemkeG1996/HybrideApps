import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient,private ls:LoginService) { }

  getData():Observable<string>{
  return this.http.get<string>('https://gebruiker-c5c2b-default-rtdb.europe-west1.firebasedatabase.app/data.json?auth='+ this.ls.idToken)
  }
  putData(data:string){
    return this.http.put('https://gebruiker-c5c2b-default-rtdb.europe-west1.firebasedatabase.app/data.json?auth='+ this.ls.idToken, JSON.stringify(data))}

}