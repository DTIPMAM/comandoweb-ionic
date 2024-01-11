import { LocalStorageService } from './../storage.service';
import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

const KEY: string = "appToken";
const KEY_VALID: string =  "appTokenValid";

@Injectable({
  providedIn: 'root'
})
export class WebTokenService {
  private storage: LocalStorageService = new LocalStorageService();

  public getDecodedToken(): string {
    const token: string | null= this.getToken();
    if (token !== null){
      return jwtDecode(token);
    } else {
      return '';
    }
  }

  public hasToken(): boolean {
    return this.storage.getItem(KEY) !== null;
  }

  public isTokenExpired(): boolean {
    const now: number = Date.now();

    if (this.getTokenValid() < now){
      return true;
    } else {
      return false;
    }
  }

  public setTokenValid(): boolean {
    const now: number = Date.now() + 86400000; // 86400000 equivale a um dia em milisegundos
    const date: Date = new Date(now);
    date.setHours(0,0,0,0);
    return this.storage.setItem(KEY_VALID, date.getTime().toString());
  }

  public getTokenValid(): number {
    const tokenValid: string | null = this.storage.getItem(KEY_VALID);
    if (tokenValid !== null){
      return Number.parseInt(tokenValid);
    }
    return 0;
  }

  public setToken(token:string): boolean {
    return this.storage.setItem(KEY, token);
  }

  public getToken(): string | null {
    return this.storage.getItem(KEY);
  }

  public removeToken(): boolean {
    return this.storage.removeItem(KEY);
  }

}
