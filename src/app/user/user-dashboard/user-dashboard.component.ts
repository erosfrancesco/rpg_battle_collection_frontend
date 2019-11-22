import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  user: User

  constructor(public userService: UserService) { }

  logout() {
    this.user = undefined
    this.userService.logout()
  }

  ngOnInit() {
    this.userService.currentUser.subscribe(currentUser => {
      this.user = currentUser;
    })
  }

}
