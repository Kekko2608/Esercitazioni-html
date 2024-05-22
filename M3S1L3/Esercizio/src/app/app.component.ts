import { Component } from '@angular/core';
import { iPost } from './Models/post';
import { iJsonContent } from './Models/object';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

api:string = "../assets/db.json"

postArr:iPost[] = []


ngOnInit(){
  this.getPosts()
}


 async getPosts():Promise<void>{

 let response = await fetch(this.api)
 let posts = <iJsonContent> await response.json()

 this.postArr = posts.posts;

}
}
