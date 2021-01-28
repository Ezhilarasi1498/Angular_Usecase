import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router  } from '@angular/router';
import { Observable } from 'rxjs';
import { UserDataService } from 'src/app/user-data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public userDataService: UserDataService,
    public router: Router
  ) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const user = this.userDataService.userValue;
    if (user) {
        // authorised so return true
        return true;
    }

    // not logged in so redirect to login page with the return url
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
}
  
}
