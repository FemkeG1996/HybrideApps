import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { GebruikerService } from './gebruiker.service';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { MedewerkersComponent } from './medewerkers/medewerkers.component';

@NgModule({
  declarations: [
    AppComponent,HeaderComponent, MainComponent, FooterComponent, UserComponent, HomeComponent, DetailComponent, MedewerkersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [GebruikerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
