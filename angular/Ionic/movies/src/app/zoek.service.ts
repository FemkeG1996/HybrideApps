import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';
import { map } from 'rxjs/operators';
import { Observable, pipe } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ZoekService {
  // private movieList: Movie[] =[
  //   {
  //     title: 'frozen',
  //     year: 2012 , 
  //     img : ''
  //   },
  //   {
  //     title: 'frozen2',
  //     year: 2012 , 
  //     img : ''
  //   },
  //   {
  //     title: 'Flash',
  //     year: 2012 , 
  //     img : ''
  //   }
  // ]
  // searchMovie : Movie[] = []
  // constructor() { }

  // getMovie(zoek:string){
       
  //   this.searchMovie= [];
  //   for(let i = 0; i< this.movieList.length; i++)
  //   {
  //     if(this.movieList[i].title == zoek)
  //     {
  //       this.searchMovie.push(this.movieList[i])
  //     }
  //   }
  //   return this.searchMovie;
  // }
  constructor(private http: HttpClient) { }
  getMovies(zoek:string): Observable<Movie[]> {

    return this.http.get<any>("http://www.omdbapi.com/?apikey=57d509c4&s="+ zoek)
    .pipe(map((data) => {
      var arr:Movie[] =[];

      for (let x in data["Search"]){
        let m : Movie = new Movie();
        m.Title = data["Search"][x]['Title'];
        m.Poster = data["Search"][x]['Poster'];
        m.Year = data["Search"][x]['Year'];
        m.imdbID = data["Search"][x]['imdbID'];
        arr.push(m);
      }
      console.log(arr)
      return arr;
    })
    )
    }

    getDetail(id:string):Observable<Movie>{
      return this.http.get<any>("http://www.omdbapi.com/?apikey=57d509c4&i="+ id)
    }
}
