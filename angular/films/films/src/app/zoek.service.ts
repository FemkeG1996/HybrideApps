import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './movie';


@Injectable({
  providedIn: 'root'
})
export class ZoekService {

  private arrMovies: Movie[] = [];

  constructor(private http: HttpClient) { this.getMovies() }
  getMovies() {
    this.http.get<Movie[]>("http://www.omdbapi.com/?apikey=57d509c4&s=frozen").subscribe((data) => {
      this.arrMovies = data
      console.log(this.arrMovies)
    }); 
  }
  searchMovie(title:string){
    console.log(this.arrMovies)
    let FilterMovies = this.arrMovies.filter(
      movie => movie.title.includes(title)
    );
    return FilterMovies;
  }
}
