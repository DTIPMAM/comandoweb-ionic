import { GlobalService } from './global.service';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment';
import { User, UserSystemInterface } from './../shared/interfaces/user.interface';
import {WebTokenService} from './auth/web-token.service';
import {Injectable } from '@angular/core';
import { LoginInterface, JwtTokenInterface } from '../shared/interfaces/login.interface';

// Serviço responsável por interações relacionadas aos usuários, como login, verificação de autenticação, obtenção de informações do usuário, etc

@Injectable({
  providedIn: 'root'
})
export class UserService extends GlobalService {
  private webTokenService: WebTokenService = new WebTokenService();

  // Realiza o login do usuário, obtendo um token JWT
  public login(loginData: LoginInterface): Observable<JwtTokenInterface> {
    const arrayPost = {
      user: loginData.username,
      pass: loginData.password
    };

    // Criado apenas para demonstração e teste, deve ser substuído pela chamada da API de login do sistema
    let obJwt: Observable<JwtTokenInterface> = new Observable();
    return obJwt;

    // Descomentar substituindo a URL da API de login
    // return this.getHttp().post<JwtTokenInterface>(
    //   `${environment.urlBackend}/site/api-token`, arrayPost
    // );
  }

  // Verifica se o usuário está autenticado
  public isLogged(): boolean {
    return this.webTokenService.hasToken();
  }

  // Verifica se o usuário possui privilégios de administrador
  public isAdmin(): boolean {
    const rules: Array<string> = this.getLoggedUser().grupos;
    return rules.includes('ADMIN');
  }

  // Obtém as informações do usuário autenticado
  public getLoggedUser(): UserSystemInterface {
    const loggedUser: UserSystemInterface = this.webTokenService.getDecodedToken() as unknown as UserSystemInterface;
    return loggedUser;
  }

  // Verifica se o token de autenticação do usuário expirou
  public isTokenExpired(): boolean {
    return this.webTokenService.isTokenExpired();
  }

  // Obtém o token de autenticação do usuário
  public getUserToken(): string {
    const token: string | null = this.webTokenService.getToken();
    if (token !== null){
      return token;
    }
    return "";
  }

  // Realiza o logout do usuário, limpando o armazenamento e redirecionando para a página de login
  public logout(): void {
    this.getStorage().clear();
    this.getRouter().navigate(['login']);
  }
}
