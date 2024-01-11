import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { UserService } from '../user.service';

@Injectable({ 
    providedIn: 'root' 
})
export class LoginAuthGuard implements CanActivate {

    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.userService.isLogged()) {
            this.router.navigate(['home']);
            return false;
        } else {
            return true;
        }
    }
}
