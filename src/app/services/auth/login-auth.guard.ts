import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { UserService } from '../user.service';

// Redireciona para a rota 'home' se o usuário já estiver logado

@Injectable({
    providedIn: 'root'
})
export class LoginAuthGuard implements CanActivate {

    constructor(
        private userService: UserService, // Serviço de usuário utilizado para verificar o status de login
        private router: Router // Serviço de roteamento do Angular utilizado para redirecionar as rotas
    ) { }

    // Método que verifica se o usuário está autorizado a acessar uma rota
    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.userService.isLogged()) {
            // Se o usuário estiver logado, redireciona para a rota 'home'
            this.router.navigate(['home']);
            return false;
        } else {
            // Se o usuário não estiver logado, permite o acesso à rota
            return true;
        }
    }
}
