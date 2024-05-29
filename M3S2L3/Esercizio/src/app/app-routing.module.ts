import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './main-component/home/home.component';
import { PreferitiComponent } from './preferiti/preferiti.component';
import { CarrelloComponent } from './carrello/carrello.component';
import { Page404Component } from './page404/page404.component';

const routes: Routes = [

  {
    path:'',
    component:HomeComponent,
    title:'Home'
  },
  {
    path:'preferiti',
    component:PreferitiComponent,
    title:'Preferiti'
  },
  {
    path:'carrello',
    component:CarrelloComponent,
    title:'Carrello'
  },
  {
    path:'**',
    component:Page404Component,
    title:'Errore 404'
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
