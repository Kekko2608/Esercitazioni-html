import { Component } from '@angular/core';
import { Post } from '../models/post.interface';
import { PostServiceService } from '../post.service.service';

@Component({
  selector: 'app-tutti',
  templateUrl: './tutti.component.html',
  styleUrls: ['./tutti.component.scss']
})
export class TuttiComponent {
    posts: Post[] = [];
    filteredPosts: any[] = [];

    constructor(
        private postSvc : PostServiceService
    ){}

    ngOnInit() {
        this.posts = this.postSvc.post
        console.log(this.posts)
    }

    filterPosts(tag: string) {
        this.filteredPosts = this.posts.filter(post => post.tags.includes(tag));
      }
}
