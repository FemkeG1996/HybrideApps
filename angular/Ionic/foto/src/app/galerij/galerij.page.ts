import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto';
import { FotoService } from '../foto.service';

@Component({
  selector: 'app-galerij',
  templateUrl: './galerij.page.html',
  styleUrls: ['./galerij.page.scss'],
})
export class GalerijPage implements OnInit {
fotos:Foto[] = []
  constructor(private fs:FotoService) { }

  ngOnInit() {
  }
ionViewWillEnter(){
  this.fs.getFotos().subscribe((data) =>
  this.fotos = data)
}
}
