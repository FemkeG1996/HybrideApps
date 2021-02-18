import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReceptenPage } from './recepten.page';

const routes: Routes = [
  {
    path: '',
    component: ReceptenPage
  },
  {
    path: 'receptdetail/:id',
    loadChildren: () => import('./receptdetail/receptdetail.module').then( m => m.ReceptdetailPageModule)
  },
  {
    path: 'receptform/:id',
    loadChildren: () => import('./receptform/receptform.module').then( m => m.ReceptformPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReceptenPageRoutingModule {}
