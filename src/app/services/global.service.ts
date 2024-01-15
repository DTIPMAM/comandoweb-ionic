import { Router } from '@angular/router';
import { LocalStorageService } from './storage.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root' // Indica que esta instância do serviço será compartilhada em todo o aplicativo.
})
export class GlobalService {
    // Construtor da classe, onde são injetados os serviços HttpClient, LocalStorageService e Router.
    constructor (
        private httpClient: HttpClient, // Serviço para fazer requisições HTTP.
        private storage: LocalStorageService, // Serviço para interagir com o armazenamento local.
        private router: Router // Serviço para navegação e manipulação da URL.
    ){}

    // Método para obter a instância do HttpClient.
    public getHttp(): HttpClient {
        return this.httpClient;
    }

    // Método para obter a instância do LocalStorageService.
    public getStorage(): LocalStorageService {
        return this.storage;
    }

    // Método para obter a instância do Router.
    public getRouter(): Router {
        return this.router;
    }
}
