import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { GebruikerService } from '../gebruiker.service';
import { gebruiker } from '../main/gebruiker';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
// public id:any = '1';
public gebruiker: gebruiker | undefined;
  constructor(private activatedRoute:ActivatedRoute, private gebruikerService : GebruikerService) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((route:ParamMap) => {
    // this.id =  route.get('id');
    this.gebruikerService.getGebruiker(route.get('id')).subscribe ( data => {
      this.gebruiker = data;
    })
    })
  }

}
