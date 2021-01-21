import { Component, OnInit } from '@angular/core';
import { Movie } from '../movie';
import { ZoekService } from '../zoek.service';

@Component({
  selector: 'app-zoek',
  templateUrl: './zoek.component.html',
  styleUrls: ['./zoek.component.scss']
})
export class ZoekComponent implements OnInit {
  titelSearch: string = '';
  filterMovies: Movie[] = [];
  constructor(private zoeker: ZoekService) {
   }

  ngOnInit(): void {
  }
  zoeken() {
  this.filterMovies  = this.zoeker.searchMovie(this.titelSearch);
  console.log(this.filterMovies)
  }
}
