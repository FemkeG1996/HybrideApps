import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { Movie } from '../movie';
import { ZoekService } from '../zoek.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  dataMovie : Movie = new Movie()
  constructor(private ar:ActivatedRoute, private zs:ZoekService) { }

  ngOnInit() {
    this.ar.paramMap.subscribe((route: ParamMap) => {
 let id = route.get('id');
      this.zs.getDetail(id).subscribe(data => { this.dataMovie = data});
    })
  }
}
