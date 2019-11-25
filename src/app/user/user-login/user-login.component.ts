import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {

  username: string = ""
  password: string = ""
  error: string
  user: User

  constructor(public userService: UserService, private href: Router, private app: AppComponent) { 
    app.fabButtonIcon = ""
  }

  login() {
    this.app.toggleSpinner(true)
    this.userService.login(this.username, this.password).subscribe(user => {
      this.app.toggleSpinner(false)
      if (user) {
        this.user = user
        this.error = undefined
        this.href.navigate(['/user'])
      } else {
        this.error = "Login failed"
      }
    })
  }

  ngOnInit() {
  }

}
