import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HondenService } from '../honden.service';
import { IHond } from '../i-hond';

@Component({
  selector: 'app-honden',
  templateUrl: './honden.component.html',
  styleUrls: ['./honden.component.scss']
})
export class HondenComponent implements OnInit {
  public honden: IHond[] = [];

  constructor(private hs: HondenService, private router: Router) { }

  ngOnInit(): void {
    this.hs.getHonden().subscribe(data=>{
      this.honden = data;
    });
  }

  nieuwFormulier(){
    this.router.navigateByUrl('/edit/new/')
  }
}
