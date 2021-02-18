import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReceptformPageRoutingModule } from './receptform-routing.module';

import { ReceptformPage } from './receptform.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReceptformPageRoutingModule
  ],
  declarations: [ReceptformPage]
})
export class ReceptformPageModule {}
