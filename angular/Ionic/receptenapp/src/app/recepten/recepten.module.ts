import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceptenPageRoutingModule } from './recepten-routing.module';

import { ReceptenPage } from './recepten.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceptenPageRoutingModule
  ],
  declarations: [ReceptenPage]
})
export class ReceptenPageModule {}
