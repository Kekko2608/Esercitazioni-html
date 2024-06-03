import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SinglePostComponent } from './single-post.component';

const routes: Routes = [{ path: '', component: SinglePostComponent }];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SinglePostRoutingModule { }
