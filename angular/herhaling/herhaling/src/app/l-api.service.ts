import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { Land } from './land';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class LApiService {
  public arrLanden: Land[] = [];
  constructor(private http:HttpClient) { }

  getLanden(): Observable<Land[]>{
 return this.http.get<Land[]>("https://landen-b98b4-default-rtdb.europe-west1.firebasedatabase.app/Landen.json")
 .pipe(map( (data) =>{
   var arr:Land[] = [];

   for(let x in data){
     arr.push(new Land(data[x]['land'], data[x]['hoofdstad'], x));
   }
   return arr;
 }) 
 )
}

  addLanden(land: string, hoofdstad: string){
    let l = new Land(land,hoofdstad)
 this.http.post("https://landen-b98b4-default-rtdb.europe-west1.firebasedatabase.app/Landen.json",l).subscribe(data =>{});
  }

  deleteLand(id:string): Observable<any> {
return this.http.delete("https://landen-b98b4-default-rtdb.europe-west1.firebasedatabase.app/Landen/"+ id +".json");

  }
}
