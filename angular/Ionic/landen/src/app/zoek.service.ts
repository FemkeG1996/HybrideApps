import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Land } from './land';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ZoekService {

  constructor(private http: HttpClient) { }

  zoekLanden(land):Observable<Land[]>{
   return this.http.get<Land[]>('https://restcountries.eu/rest/v2/name/' + land)

 }  
 getLand(id: string):Observable<Land>{
return this.http.get<any>('https://restcountries.eu/rest/v2/name/'+id)
 }
}
