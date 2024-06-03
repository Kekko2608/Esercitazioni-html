import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailComponent } from './post-detail.component';
import { HomeRoutingModule } from '../homepage/home-routing.module';
import { PostDetailRoutingModule } from './post-detail-routing.module';



@NgModule({
  declarations: [PostDetailComponent],
  imports: [
    CommonModule,HomeRoutingModule,PostDetailRoutingModule
  ]
})
export class PostDetailModule { }
