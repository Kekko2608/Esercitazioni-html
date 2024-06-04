
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SinglePostComponent } from '../single-post/single-post.component';
import { NgModule } from '@angular/core';



@NgModule({
  declarations: [SinglePostComponent],
  imports: [CommonModule,FormsModule],
  exports:[FormsModule,SinglePostComponent]
})
export class SharedModule { }
