import { Router } from '@angular/router';
import { LocalStorageService } from './storage.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class GlobalService {
    constructor (
        private httpClient: HttpClient,
        private storage: LocalStorageService,
        private router: Router
    ){}

    public getHttp(): HttpClient {
        return this.httpClient;
    }

    public getStorage(): LocalStorageService {
        return this.storage;
    }

    public getRouter(): Router {
        return this.router;
    }
}