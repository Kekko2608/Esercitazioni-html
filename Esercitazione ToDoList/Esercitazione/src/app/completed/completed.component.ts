import { Component, OnInit } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { UsersService } from '../services/users.service';
import { iTodo } from '../interface/todo';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  todosWithAuthors: iTodo[] = [];

  constructor(private todoSvc: TodoService, private userSvc: UsersService) {}

  ngOnInit() {
    this.todosWithAuthors = this.todoSvc.addUsersToTodos()
    console.log(this.todosWithAuthors)
  }

}

