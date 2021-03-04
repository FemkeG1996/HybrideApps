import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KaartPage } from './kaart.page';

const routes: Routes = [
  {
    path: '',
    component: KaartPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KaartPageRoutingModule {}
