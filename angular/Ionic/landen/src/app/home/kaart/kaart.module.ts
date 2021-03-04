import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KaartPageRoutingModule } from './kaart-routing.module';

import { KaartPage } from './kaart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KaartPageRoutingModule
  ],
  declarations: [KaartPage]
})
export class KaartPageModule {}
