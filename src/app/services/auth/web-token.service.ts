import { LocalStorageService } from './../storage.service';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

// Serviço responsável por gerenciar o token JWT na aplicação

@Injectable({
  providedIn: 'root'
})
export class WebTokenService {

  // Instância do serviço de armazenamento local
  private storage: LocalStorageService = new LocalStorageService();

  // Chave para armazenar o token JWT no armazenamento local
  private readonly KEY: string = "appToken";

  // Chave para armazenar a validade do token JWT no armazenamento local
  private readonly KEY_VALID: string =  "appTokenValid";

  // Obtém o token JWT armazenado e retorna suas informações decodificadas
  public getDecodedToken(): string {
    const token: string | null= this.getToken();
    if (token !== null){
      return jwtDecode(token);
    } else {
      return '';
    }
  }

  // Verifica se há um token JWT armazenado
  public hasToken(): boolean {
    return this.storage.getItem(this.KEY) !== null;
  }

  // Verifica se o token JWT armazenado está expirado
  public isTokenExpired(): boolean {
    const now: number = Date.now();

    if (this.getTokenValid() < now){
      return true;
    } else {
      return false;
    }
  }

  // Define a validade do token JWT no armazenamento local
  public setTokenValid(): boolean {
    const now: number = Date.now() + 86400000; // 86400000 equivale a um dia em milisegundos
    const date: Date = new Date(now);
    date.setHours(0,0,0,0);
    return this.storage.setItem(this.KEY_VALID, date.getTime().toString());
  }

  // Obtém o valor de validade do token JWT do armazenamento local
  public getTokenValid(): number {
    const tokenValid: string | null = this.storage.getItem(this.KEY_VALID);
    if (tokenValid !== null){
      return Number.parseInt(tokenValid);
    }
    return 0;
  }

  // Armazena o token JWT no armazenamento local
  public setToken(token:string): boolean {
    return this.storage.setItem(this.KEY, token);
  }

  // Obtém o token JWT armazenado no armazenamento local
  public getToken(): string | null {
    return this.storage.getItem(this.KEY);
  }

  // Remove o token JWT do armazenamento local
  public removeToken(): boolean {
    return this.storage.removeItem(this.KEY);
  }

}
