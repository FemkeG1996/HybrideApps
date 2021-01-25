import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './cities/detail/detail.component';
import { LijstComponent } from './cities/lijst/lijst.component';

@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    LijstComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
