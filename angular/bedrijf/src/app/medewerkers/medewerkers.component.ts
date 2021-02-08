import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GebruikerService } from '../gebruiker.service';
import { gebruiker } from './gebruiker';
@Component({
  selector: 'app-medewerkers',
  templateUrl: './medewerkers.component.html',
  styleUrls: ['./medewerkers.component.scss']
})
export class MedewerkersComponent implements OnInit {

  public voornaam: string = '';

  gebruikers: gebruiker[] = [];
  public aantal : number = 0;

  constructor(private gebruikerservice: GebruikerService, private router:Router) {

 this.gebruikerservice.getGebruikers().subscribe( data =>{
  this.gebruikers = data ;
  console.log(data);
}) 
  }

  ngOnInit(): void {
  }

  addUser(vn: HTMLInputElement, an: HTMLInputElement, ww: HTMLInputElement): void {
  this.gebruikerservice.addGebruiker(vn.value, an.value, ww.value);
  this.gebruikerservice.getGebruikers().subscribe( data =>{
    this.gebruikers = data ;
  }) 
  this.router.navigateByUrl('Medewerkers')
  }
  reset() {
    this.gebruikers = [];
  }

  knop() {
    if (this.voornaam == '') {
      return true;
    } else {
      return false;
    }
  }
}