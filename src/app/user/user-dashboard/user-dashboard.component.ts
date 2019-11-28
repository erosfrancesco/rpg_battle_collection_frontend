import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user.model';
// import { ShellModule } from 'src/app/shell/shell.module';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  user: User

  constructor(public userService: UserService, private app: AppComponent, private router: Router) {  
    app.fabButtonIcon = ""
  }

  logout() {
    this.user = undefined
    this.userService.logout()
    this.router.navigate(['/user/login'])
  }

  ngOnInit() {
    this.userService.currentUser.subscribe(currentUser => {
      this.user = currentUser;
    })
  }

}
