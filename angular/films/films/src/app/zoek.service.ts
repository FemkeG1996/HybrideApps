import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';
import { map } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ZoekService {

  private arrMovies: Movie[] = [];

  constructor(private http: HttpClient) { }
  getMovies(zoekterm:string): Observable<Movie[]> {

    return this.http.get<any>("http://www.omdbapi.com/?apikey=57d509c4&s="+ zoekterm)
    .pipe(map((data) => {
      var arr:Movie[] =[];

      for (let x in data["Search"]){
        arr.push(new Movie(data["Search"][x]['Title'],data["Search"][x]['Poster'],data["Search"][x]['Year']  ));
      }
      console.log(arr)
      return arr;
    })
    )
    }

}
