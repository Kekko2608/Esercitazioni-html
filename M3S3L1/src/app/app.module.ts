import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RandomColorDirective } from 'src/directives/randomColor.directive';
import { PostFormComponent } from './shared/post-form/post-form.component';



@NgModule({
  declarations: [
    AppComponent,
    PostFormComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, RandomColorDirective],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
