import { Injectable } from '@angular/core';

import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { User } from './user.model';
import { map, tap} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

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
      return
    }

    localStorage.setItem('currentUser', JSON.stringify(v))
  }

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(this.localUser);
    this.currentUser = this.currentUserSubject.asObservable();
  }

  loginCall(username: string, password: string) :Observable<any> {
    return this.http.post(`${this.baseUrl}/users/authenticate`, { username, hash: password })
  }

  login(username: string, password: string) :Observable<any> {
    return this.loginCall(username, password)
    .pipe(map(response => {
      const user = response.data
      if (!user) { return }

      const {username, token} = user 

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

    return request.url === this.baseUrl + "/users/refreshToken"
  }
  

  refreshToken() :Observable<any>  {
    const refreshToken = this.localUser.token
    const username = this.localUser.username
 
    return this.http.post(this.baseUrl + "/users/refreshToken", { username, refreshToken })
    .pipe(tap(res => {
      console.log("refreshed token:", res.token)
      const currentUser = new User()
      currentUser.username = username
      currentUser.token = res.token
      this.localUser = currentUser
    }));

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
