import { Component, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { GebruikerService } from '../gebruiker.service';
import { gebruiker } from './gebruiker';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public voornaam: string = '';

  gebruikers: gebruiker[] = [];
  public aantal : number = 0;

  constructor(private gebruikerservice: GebruikerService,private router: Router ) {

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
  nieuw(){
    this.router.navigateByUrl('nieuw')
  }
}