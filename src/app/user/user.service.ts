import { Injectable } from '@angular/core';
import { Config } from '../shared/config';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from './user.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = Config.baseUrl

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private userService: UserService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  loginCall(username: string, password: string) :Observable<any> {
    return this.http.post(`${this.baseUrl}users/authenticate`, { username, hash: password })
  }

  login(username: string, password: string) {
    return this.loginCall(username, password)
        .pipe(map(response => {
          const user = response.data
          if (!user) { return }

          const {username, token} = user 

          const currentUser = new User()
          currentUser.username = username
          currentUser.token = token

          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('currentUser', JSON.stringify(currentUser));
          this.currentUserSubject.next(currentUser);
          return currentUser;
        }));
  }

  logout() {
      // remove user from local storage to log user out
      localStorage.removeItem('currentUser');
      this.currentUserSubject.next(null);
  }

}
