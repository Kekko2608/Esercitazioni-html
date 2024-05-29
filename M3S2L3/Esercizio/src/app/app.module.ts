import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './main-component/navbar/navbar.component';
import { FooterComponent } from './main-component/footer/footer.component';
import { HomeComponent } from './main-component/home/home.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { PreferitiComponent } from './preferiti/preferiti.component';
import { Page404Component } from './page404/page404.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    CarrelloComponent,
    PreferitiComponent,
    Page404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
