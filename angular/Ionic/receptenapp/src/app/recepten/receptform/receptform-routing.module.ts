import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceptformPage } from './receptform.page';

const routes: Routes = [
  {
    path: '',
    component: ReceptformPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceptformPageRoutingModule {}
