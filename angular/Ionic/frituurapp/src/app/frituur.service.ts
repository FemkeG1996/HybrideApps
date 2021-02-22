import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Snack } from './snack';

@Injectable({
  providedIn: 'root'
})
export class FrituurService {
  url = "https://fembackend.herokuapp.com/frituursnacks";

  constructor(private http: HttpClient) { }
  getSnacks() :Observable<Snack[]> {
    return this.http.get<Snack[]>(this.url);
  }

  addSnack(snack:Snack): Observable<any>{
   return this.http.post("https://fembackend.herokuapp.com/frituursnacks/nieuw",snack);
  }
}


