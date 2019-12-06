import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject, throwError } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { User } from './user.model';
import { map, tap, catchError} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;
  public get localUser() { return JSON.parse(localStorage.getItem('currentUser')) }
  public set localUser(v) {
    if (!v) {
      localStorage.removeItem('currentUser');
      this.router.navigate(['user/login'])
      return
    }

    localStorage.setItem('currentUser', JSON.stringify(v))
  }

  constructor(private http: HttpClient, private router: Router) {
    this.currentUserSubject = new BehaviorSubject<User>(this.localUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  loginCall(username: string, password: string) :Observable<any> {
    return this.http.post(`${this.baseUrl}/user/authenticate`, { username, password })
  }

  login(username: string, password: string) :Observable<User> {
    return this.loginCall(username, password)
    .pipe(map(response => {

      const {username, token} = response 

      if (!username || !token) {
        // show error
        return
      }

      const currentUser = new User()
      currentUser.username = username
      currentUser.token = token

      // store user details and jwt token in local storage to keep user logged in between page refreshes
      this.localUser = currentUser
      this.currentUserSubject.next(currentUser);
      return currentUser;
    }));
  }

  logout() {
      // remove user from local storage to log user out
      this.localUser = null
      this.currentUserSubject.next(null);
  }


  isRefreshingToken(request: HttpRequest<any>) :boolean {
    const refreshToken = this.localUser && this.localUser.token
    const username = this.localUser && this.localUser.username

    if ( !(refreshToken && username) ) {
      return false
    }

    return request.url === this.baseUrl + "/user/refreshToken"
  }
  

  refreshToken() :Observable<any>  {
    const refreshToken = this.localUser.token
    const username = this.localUser.username
 
    return this.http.post(this.baseUrl + "/user/refreshToken", { username, refreshToken })
    .pipe(tap(res => {
      const currentUser = new User()
      currentUser.username = username
      currentUser.token = res.token
      this.localUser = currentUser
    }))
  }


  isLogged() :Observable<boolean> {
    return this.currentUserSubject.pipe(map(user => { 
      if (user && user.token) {
        return true
      }
      return false
    }))
  }
}
