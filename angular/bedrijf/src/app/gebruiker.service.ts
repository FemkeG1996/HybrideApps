import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { gebruiker } from './main/gebruiker';
import { map } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class GebruikerService {

  constructor(private http: HttpClient) {  }

  getGebruikers(): Observable <gebruiker[]>{
  return  this.http.get<gebruiker[]>('https://test-9333c-default-rtdb.europe-west1.firebasedatabase.app/Gebruikers.json')
  .pipe(map( data => {
    let arr :gebruiker[] = [];
    for(let x in data)
    {
      let g : gebruiker = new gebruiker( data[x]['Voornaam'], data[x]['Achternaam'], data[x]['Wachtwoord'],x)
      arr.push(g);
    }
    return arr;
  }));
  }

  addGebruiker( vn:string , an:string, ww:string)
{
 let gebr: gebruiker = new gebruiker(vn,an,ww);
 this.http.post("https://test-9333c-default-rtdb.europe-west1.firebasedatabase.app/Gebruikers.json",gebr).subscribe(data =>{} );
}
deleteGebruiker(id: string)
{
this.http.delete("https://test-9333c-default-rtdb.europe-west1.firebasedatabase.app/Gebruikers/"+id +".json").subscribe(data =>{});
}
}
