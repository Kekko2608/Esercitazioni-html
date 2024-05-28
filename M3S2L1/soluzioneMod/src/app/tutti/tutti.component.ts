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
    uniqueTags: Set<string> = new Set<string>();

    constructor(
        private postSvc : PostServiceService
    ){}

    ngOnInit() {
        this.posts = this.postSvc.post
        this.getUniqueTags();
        this.filteredPosts = this.posts;
        console.log(this.posts)
    }

    filterPosts(tag: string) {
        this.filteredPosts = this.posts.filter(post => post.tags.includes(tag));
      }

      getUniqueTags() {
        this.posts.forEach(post => {
            post.tags.forEach(tag => {
                this.uniqueTags.add(tag);
            });
        });
}}
