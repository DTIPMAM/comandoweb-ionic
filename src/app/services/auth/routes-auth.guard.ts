import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { UserService } from '../user.service';

// Verifica se o usuário está autenticado e se o token de autenticação está válido. Redireciona para a página de login se necessário

@Injectable({
    providedIn: 'root'
})
export class RoutesAuthGuard implements CanActivate {

    constructor(
        private userService: UserService, // Serviço de usuário utilizado para verificar o status de login
        private router: Router // Serviço de roteamento do Angular utilizado para redirecionar as rotas
    ) { }

    // Método que verifica se o usuário está autorizado a acessar uma rota
    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.userService.isLogged()) {
            // Se o usuário não estiver logado, redireciona para a rota 'login' com a URL de origem como parâmetro de consulta
            this.router.navigate(['login'],
                {
                    queryParams: {
                        fromUrl: state.url
                    }
                });
            return false;
        } else if (this.userService.isTokenExpired()) {
            // Se o token de autenticação estiver expirado, realiza o logout, redireciona para a rota 'login' com a URL de origem como parâmetro de consulta.
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
