import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { PostServiceService } from 'src/app/post.service.service';

@Component({
  selector: 'app-inactive-posts',
  templateUrl: './inactive-posts.component.html',
  styleUrls: ['./inactive-posts.component.scss']
})
export class InactivePostsComponent {
    postsArr: Post[] = [];

    constructor (
        private postSvc : PostServiceService
    ){}


    ngOnInit() {
       this.postsArr = this.postSvc.post
        };
    }



