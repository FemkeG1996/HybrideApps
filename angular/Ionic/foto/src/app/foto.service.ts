import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Foto } from './foto';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class FotoService {

  constructor(private http:HttpClient) { }

  saveFoto(Base64:string, naam:string): Observable<Foto>{
    let f = new Foto();
    f.data = Base64;
    f.naam = naam;
    return this.http.post<Foto>("https://foto-ea1a2-default-rtdb.europe-west1.firebasedatabase.app/.json", f)
  }
  getFotos(): Observable<Foto[]>{
    return this.http.get<Foto[]>('https://foto-ea1a2-default-rtdb.europe-west1.firebasedatabase.app/.json')
    .pipe(map(
      data =>{
        let fotos: Foto[]=[]
        for(let i in data){
          let f = new Foto();
        f.data = data[i]['data'];
        f.id = i;
        fotos.push(f);
        }
        return fotos;
      }
      )
    )
  }
  deleteFoto(id: string){
   this.http.delete("https://foto-ea1a2-default-rtdb.europe-west1.firebasedatabase.app/"+id+".json").subscribe(data => {})
  }
}
