import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subscription, throwError, BehaviorSubject } from 'rxjs';
import { UserService } from '../user.service';
import { User } from '../user.model';
import { catchError, switchMap, filter, take } from 'rxjs/operators';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    private isRefreshing = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);


    constructor(private userService: UserService) {}


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        const token = this.userService.localUser && this.userService.localUser.token
        if (token) {
            request = this.addToken(request, token)
        }
        
        return next.handle(request).pipe(catchError(error => {
            if (error.status === 401) {
                return this.handle401Error(request, next);
            }

            return throwError(error);    
        }));
    }


    private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
        if (!this.isRefreshing) {
            this.isRefreshing = true;
            this.refreshTokenSubject.next(null);

            return this.userService.refreshToken().pipe(
            switchMap((res: any) => {
                this.isRefreshing = false;
                this.refreshTokenSubject.next(res.token);
                console.log("got refreshed token", res)
                return next.handle(this.addToken(request, res.token));
            }));
        }

        return this.refreshTokenSubject.pipe(
            filter(res => res.token != null),
            take(1),
            switchMap(jwt => {
                console.log("got token while already refreshing", jwt)
                return next.handle(this.addToken(request, jwt));
        }));    
    }
  
    private addToken(request: HttpRequest<any>, token: string) :HttpRequest<any> {
        if (!token) {
            return request
        }

        return request.clone({
            setHeaders: {
                'Authorization': `Bearer ${token}`
            }
        });
    }
}