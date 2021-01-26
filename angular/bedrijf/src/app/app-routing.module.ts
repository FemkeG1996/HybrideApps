import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DetailComponent } from './detail/detail.component';
import { MainComponent } from './main/main.component';
import { MedewerkersComponent } from './medewerkers/medewerkers.component';
import { ListComponent } from './list/list.component';

const routes: Routes = [
  {
    path: '', 
    redirectTo: 'Dashboard',
    pathMatch: 'full'

  },
  {
    path: 'Dashboard',
    component : MainComponent
  },
  {
    path : 'Medewerkers',
    component : ListComponent
  },
  {
    path : 'gebruikers/:id',
    component : DetailComponent
  },

  {
    path : 'nieuw',
    component : MedewerkersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
