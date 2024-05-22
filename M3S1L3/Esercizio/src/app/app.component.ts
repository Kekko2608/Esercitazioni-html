import { Component } from '@angular/core';
import { iPost } from './Models/post';

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
 let posts = <iPost[]> await response.json()

 this.postArr = posts;

}

}
