import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { UserService } from '../user.service';
import { User } from '../user.model';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    user: User
    currentUserSub: Subscription

    constructor(private userService: UserService) { 
        this.currentUserSub = userService.currentUser.subscribe(user => { this.user = user })
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        if (this.user && this.user.token) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${this.user.token}`
                }
            });
        }

        return next.handle(request);
    }
}