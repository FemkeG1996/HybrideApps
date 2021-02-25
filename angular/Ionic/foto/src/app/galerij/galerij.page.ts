import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Foto } from '../foto';
import { FotoService } from '../foto.service';

@Component({
  selector: 'app-galerij',
  templateUrl: './galerij.page.html',
  styleUrls: ['./galerij.page.scss'],
})
export class GalerijPage implements OnInit {
fotos:Foto[] = []
  constructor(private fs:FotoService, private router:Router) { }

  ngOnInit() {
  }
ionViewWillEnter(){
this.getfotos();
}
deleteKnop(id){
this.fs.deleteFoto(id);
this.getfotos();
}

getfotos(){
  this.fs.getFotos().subscribe((data) =>
  this.fotos = data)
}
}
