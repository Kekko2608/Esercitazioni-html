import { Component, OnInit } from '@angular/core';
import { iTodo } from '../interface/todo';
import { TodoService } from '../services/todo.service';
import { iUser } from '../interface/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit{

  todosWithAuthors: iUser[] = [];

  constructor(private todoSvc: TodoService) {}


  ngOnInit() {
    this.todosWithAuthors = this.todoSvc.getTodosUsers()
    console.log(this.todosWithAuthors)
  }

}
