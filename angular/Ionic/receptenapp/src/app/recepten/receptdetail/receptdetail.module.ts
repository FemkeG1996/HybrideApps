import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceptdetailPageRoutingModule } from './receptdetail-routing.module';

import { ReceptdetailPage } from './receptdetail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceptdetailPageRoutingModule
  ],
  declarations: [ReceptdetailPage]
})
export class ReceptdetailPageModule {}
