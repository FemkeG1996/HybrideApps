import { Component, OnInit } from '@angular/core';
import { LApiService } from '../l-api.service';
import { Land } from '../land';
import { LandenService } from '../landen.service';

@Component({
  selector: 'app-lijst',
  templateUrl: './lijst.component.html',
  styleUrls: ['./lijst.component.scss']
})
export class LijstComponent implements OnInit {
public landen: Land[] = [];
  constructor(private ls:LApiService) { 
   ls.getLanden().subscribe(
     data =>{
       this.landen = data
     }
   );
   }

  ngOnInit(): void {
  }

  verwijder(id:string): void{
    this.ls.deleteLand(id).subscribe(data => {});
  }
}
