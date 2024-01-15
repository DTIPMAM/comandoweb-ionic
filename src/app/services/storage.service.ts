import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private storage: Storage;

  constructor(){
    this.storage = window.localStorage;
  }

  public setItem(key:string, value:string): boolean {
    if (this.storage){
      this.storage.setItem(key, value);
      return true;
    }
    return false;
  }

  public removeItem(key:string): boolean {
    if (this.storage){
      this.storage.removeItem(key);
      return true;
    }
    return false;
  }

  public getItem(key:string): string | null {
    return this.storage.getItem(key);
  }

  public clear(): boolean {
    if (this.storage){
      this.storage.clear();
      return true;
    }
    return false;
  }
}
