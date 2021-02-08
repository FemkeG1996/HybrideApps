import { Component, OnInit } from '@angular/core';
import { FavoService } from '../favo.service';
import { Movie } from '../movie';
import { ZoekService } from '../zoek.service';

@Component({
  selector: 'app-zoek',
  templateUrl: './zoek.component.html',
  styleUrls: ['./zoek.component.scss']
})
export class ZoekComponent implements OnInit {
  titelSearch: string = '';
  PosterSearch: string = '';
  filterMovies: Movie[] = [];
  constructor(private zoeker: ZoekService, private fs : FavoService) {
   }

  ngOnInit(): void {
  }
  zoeken() {
  this.zoeker.getMovies(this.titelSearch).subscribe(data => {this.filterMovies = data});
  }

  public maakFavo(f : Movie){
    this.fs.addFavo(f)
  }
  naarFavo(){
    this.filterMovies = this.fs.getFavo();
  }

}
