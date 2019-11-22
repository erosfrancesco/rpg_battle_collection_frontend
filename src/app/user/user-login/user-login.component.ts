import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  username: string = ""
  password: string = ""
  user: User

  constructor(public userService: UserService, private href: Router) { 
  }

  login() {
    this.userService.login(this.username, this.password).subscribe(user => {
      if (user) {
        this.user = user
        this.href.navigate(['/user'])
      }
    })
  }

  ngOnInit() {
  }

}
