import { Component, OnInit } from '@angular/core';
import { Land } from '../land';
import { LandenService } from '../landen.service';
import { Landen2Service } from '../landen2.service';

@Component({
  selector: 'app-landen',
  templateUrl: './landen.component.html',
  styleUrls: ['./landen.component.scss']
})
export class LandenComponent implements OnInit {
  public landen: Land[] = [];
  public gekozen:string = "";

  constructor(private ls: Landen2Service) {
    this.landen = ls.getLanden();
  }
  public toonStad(l: Land){
    this.gekozen = l.hoofdstad;
  }
  ngOnInit(): void {
  }

}
