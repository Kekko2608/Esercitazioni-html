import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { iUser } from '../models/user';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  usersUrl:string = "http://localhost:3000/users"

  constructor(private http:HttpClient) { }

  private user = new Subject<iUser[]>()
  users$ = this.user.asObservable()

  getAllUsers(){
    return this.http.get<iUser[]>(this.usersUrl)
    .subscribe(users => this.user.next(users))
  }
}
