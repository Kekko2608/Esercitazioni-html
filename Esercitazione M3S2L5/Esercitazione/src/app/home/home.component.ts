import { Component, OnInit, Output } from '@angular/core';
import { iTodo } from '../interface/todo';
import { TodoService } from '../services/todo.service';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  todosWithAuthors: iTodo[] = [];

  constructor(private todoSvc: TodoService) {}

  ngOnInit() {
    this.todosWithAuthors = this.todoSvc.addUsersToTodos()
    console.log(this.todosWithAuthors)
  }

search!:string

getSearch(search: string){
  this.todosWithAuthors = this.todoSvc.addUsersToTodos();
  this.todosWithAuthors = this.todosWithAuthors.filter(todo => {
    const firstName = todo.user?.firstName?.toLowerCase() ?? '';
    const lastName = todo.user?.lastName?.toLowerCase() ?? '';
    return firstName.includes(search) || lastName.includes(search);
  });

  console.log(this.todosWithAuthors);
}

}
