import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DetailComponent } from './detail/detail.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component : MainComponent
  },
  {
    path : 'gebruikers',
    component : UserComponent
  },
  {
    path : 'gebruikers/:id',
    component : DetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
