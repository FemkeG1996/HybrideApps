import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceptdetailPage } from './receptdetail.page';

const routes: Routes = [
  {
    path: '',
    component: ReceptdetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceptdetailPageRoutingModule {}
