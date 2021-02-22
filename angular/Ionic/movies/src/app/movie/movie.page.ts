import { Component, OnInit } from '@angular/core';
import { title } from 'process';
import { AppRoutingModule } from '../app-routing.module';
import { Movie } from '../movie';
import { ZoekService } from '../zoek.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.page.html',
  styleUrls: ['./movie.page.scss'],
})
export class MoviePage implements OnInit {
  zoek:string;
  searchMovie : Movie[] = []
  constructor(private am:AppRoutingModule, private zs:ZoekService) { }

  ngOnInit() {
  }

  search(){
    
    this.zs.getMovies(this.zoek).subscribe(data => {this.searchMovie = data});
    console.log('zoeken')

  }
}
