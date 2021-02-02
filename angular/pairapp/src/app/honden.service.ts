import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { isThisTypeNode } from 'typescript';
import { IHond } from './i-hond';

@Injectable({
  providedIn: 'root'
})
export class HondenService {

  constructor(private http: HttpClient) { }

  getHonden(): Observable<IHond[]> {
    return this.http.get<IHond[]>('https://angular-demo-a24e8-default-rtdb.europe-west1.firebasedatabase.app/honden.json')
      .pipe(map(
        data => {
          let arr: IHond[] = [];
          for (let x in data) {
            arr.push({
              id: x,
              naam: data[x]['naam'],
              ras: data[x]['ras'],
              geslacht: data[x]['geslacht'],
              inenting: data[x]['inenting'],
              kleur: data[x]['kleur'],
              foto: data[x]['foto'],
              bio: data[x]['bio']
            })
          }
          return arr;
        }
      ))
  }

  updateHond(hond: IHond):Observable<any>{
    let id = hond.id;
    hond['id'] = null
    return this.http.put('https://angular-demo-a24e8-default-rtdb.europe-west1.firebasedatabase.app/honden/' + id +'.json', hond);
  }

  getHond(id:string): Observable<IHond>{
    return this.http.get<IHond>('https://angular-demo-a24e8-default-rtdb.europe-west1.firebasedatabase.app/honden/' + id +'.json')
  }

  addHond(hond: IHond):Observable<any>{
    return this.http.post('https://angular-demo-a24e8-default-rtdb.europe-west1.firebasedatabase.app/honden/.json', hond);
  }
}
