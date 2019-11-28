import { NgModule } from '@angular/core';
import { LoginRoutingModule } from './user-routing.module';

import { UserLoginComponent } from './user-login/user-login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { User } from './user.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [UserLoginComponent, UserDashboardComponent],
  imports: [
    SharedModule,
    LoginRoutingModule
  ]
})

export class LoginModule { 
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private userService: UserService) {
    this.currentUserSubject = new BehaviorSubject<User>(this.userService.localUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  login(username: string, password: string) {
    return this.userService.login(username, password)
        .pipe(map(user => {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            this.userService.localUser = user
            this.currentUserSubject.next(user);
            return user;
        }));
  }

  logout() {
      // remove user from local storage to log user out
      this.userService.localUser = null
      this.currentUserSubject.next(null);
  }
}
