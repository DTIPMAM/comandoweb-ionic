import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { UserService } from '../user.service';

@Injectable({ 
    providedIn: 'root' 
})
export class RoutesAuthGuard implements CanActivate {

    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.userService.isLogged()) {
            this.router.navigate(['login'],
                {
                    queryParams: {
                        fromUrl: state.url
                    }
                });
            return false;
        }

        else if (this.userService.isTokenExpired()) {
            this.userService.logout();
            this.router.navigate(['login'],
                {
                    queryParams: {
                        fromUrl: state.url
                    }
                }
            );
            return false;
        }
        return true;
    }
}
