import { Component } from '@angular/core';
import { iUser } from '../../models/user';
import { UsersService } from '../../services/users.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  user:iUser|undefined;
  users:iUser[]=[]
constructor(private authSvc: AuthService, private userSvc:UsersService){}
  ngOnInit() {

    this.authSvc.user$.subscribe(user => {
      this.user = user || undefined;
    })

    this.userSvc.getAllUsers();

    this.userSvc.users$.subscribe(user => {
      this.users = user
    })
  }
}
