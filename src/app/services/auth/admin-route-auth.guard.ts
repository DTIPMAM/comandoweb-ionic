import { UserService } from 'src/app/services/user.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({ 
    providedIn: 'root' 
})
export class AdminRoutesAuthGuard implements CanActivate {
    
    constructor(
        private userService: UserService,
        private router: Router
    ){}

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.userService.isAdmin()) {
            this.router.navigate(['/']);
            return false;
        }
        return true;
    }
}