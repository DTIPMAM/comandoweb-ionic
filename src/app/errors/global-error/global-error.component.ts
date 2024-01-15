import { Component } from '@angular/core';

@Component({
  selector: 'app-global-error',
  templateUrl: './global-error.component.html',
  styleUrls: ['./global-error.component.scss'],
})
export class GlobalErrorComponent   {

  // Este componente seria responsável por apresentar uma mensagem amigável ou oferecer alguma forma de feedback ao usuário quando ocorre um erro inesperado em qualquer parte da aplicação

  // Exemplo de chamada
  // <app-global-error *ngIf="mostrarErro"></app-global-error>

  constructor() { }
}
