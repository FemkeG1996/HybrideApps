import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FrituurService } from 'src/app/frituur.service';
import { Snack } from 'src/app/snack';

@Component({
  selector: 'app-nieuw',
  templateUrl: './nieuw.page.html',
  styleUrls: ['./nieuw.page.scss'],
})
export class NieuwPage implements OnInit {

  constructor(private fs: FrituurService, private router: Router) { }

  ngOnInit() {
  }
saveSnack(naam: string , tijd:number, vegetarisch: boolean){
  let snack : Snack = new Snack() ;
  snack.naam = naam;
  snack.frituurtijd = tijd;
  snack.vegetarisch = vegetarisch;
  this.fs.addSnack(snack).subscribe(data => { })
  this.router.navigateByUrl('home')
}
}
