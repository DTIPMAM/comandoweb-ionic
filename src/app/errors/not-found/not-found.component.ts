import { HtmlUtils } from './../../shared/utils/html.utils';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

// Componente Angular que representa a página de "Página não encontrada"

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  
  // Indica se o dispositivo é móvel
  public isMobileDevice: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    // Verifica se o dispositivo é móvel usando a classe HtmlUtils
    this.isMobileDevice = HtmlUtils.isMobileDevice();
  }

  public navToHome(): void {
    // Navega para a página inicial quando o botão "Página Inicial" é clicado
    this.router.navigate(['']);
  }
}
