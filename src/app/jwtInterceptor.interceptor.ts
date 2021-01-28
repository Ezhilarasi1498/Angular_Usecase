import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { UserDataService } from 'src/app/user-data.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    constructor(private userDataService: UserDataService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add auth header with jwt if user is logged in and request is to the api url
        const user = this.userDataService.userValue;
        const isLoggedIn = user && user.token;
        //const isApiUrl = request.url.startsWith(environment.apiUrl);
        if (isLoggedIn ) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Bearer ${user.token}`
                }
            });
        }

        return next.handle(request);
    }
}