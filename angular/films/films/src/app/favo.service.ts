import { Injectable } from '@angular/core';
import { Movie } from './movie';


@Injectable({
  providedIn: 'root'
})
export class FavoService {

  favoMovies: Movie[] = [];
  constructor() { }


  public getFavo(): Movie[] {
    if (localStorage.getItem('favo') != null) {
      this.favoMovies = JSON.parse(localStorage.getItem("favo") || '' );
    }
    return this.favoMovies;
  }
  public addFavo(f: Movie) {
    this.favoMovies.push(f);
    localStorage.setItem('favo', JSON.stringify(this.favoMovies));
  }
}
