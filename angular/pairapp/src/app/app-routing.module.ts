import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HondeditComponent } from './hondedit/hondedit.component';
import { HondenComponent } from './honden/honden.component';

const routes: Routes = [

  {
    path: '', pathMatch :'full',
    component: HondenComponent
  },
  {
    path: 'edit/:mode/:id',
    component: HondeditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
