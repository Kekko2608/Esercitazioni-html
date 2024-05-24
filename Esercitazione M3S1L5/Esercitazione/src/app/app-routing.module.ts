import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FiatComponent } from './components/auto/fiat/fiat.component';
import { FordComponent } from './components/auto/ford/ford.component';
import { AudiComponent } from './components/auto/audi/audi.component';
import { Page404Component } from './components/page404/page404.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: "Home"
},
{
    path: 'fiat',
    component: FiatComponent,
    title: "Fiat"
},
{
    path: 'ford',
    component: FordComponent,
    title: "Ford"
},
{
    path: 'audi',
    component: AudiComponent,
    title: "Audi"
},
{
    path: '**',
    component: Page404Component,
    title: "Error 404"
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
