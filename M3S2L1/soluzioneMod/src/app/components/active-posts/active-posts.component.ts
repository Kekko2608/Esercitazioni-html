import { Component } from '@angular/core';
import { Post } from 'src/app/models/post.interface';
import { PostServiceService } from 'src/app/post.service.service';

@Component({
    selector: 'app-active-posts',
    templateUrl: './active-posts.component.html',
    styleUrls: ['./active-posts.component.scss'],
})
export class ActivePostsComponent {

    postsArr: Post[] = [];

    constructor(
        private postSvc:PostServiceService
      ){}


    ngOnInit() {
        this.postsArr = this.postSvc.post
        };
    }



