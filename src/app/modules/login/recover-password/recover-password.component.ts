import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { constants } from 'src/environments/constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {
  // Propriedade para armazenar o texto de direitos autorais do ambiente constants
  public copyright: string = constants.copyright;

  // Propriedade que representa o formulário de e-mail usando Reactive Forms
  public emailForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {

    // Inicializa o formulário de e-mail
    this.initForm();

    // Ajusta a altura do display com base na largura da janela
    this.adjustDisplayHeight();

    // Adiciona um ouvinte de evento para ajustar a altura do display quando a janela é redimensionada
    window.addEventListener('resize', this.adjustDisplayHeight);

  }

  // Método privado para adicionar ou remover classes de estilo com base na largura da janela
  private adjustDisplayHeight(): void {
    const signupSection = document.getElementById('recover-password-section');
    const colForm = document.getElementById('col-form');
    if (signupSection !== null && colForm !== null){
      const width: number = window.innerWidth;
      if (width >= 992){
        signupSection.classList.add('hd-login');
        colForm.classList.add('rounded');
      } else {
        signupSection.classList.remove('hd-login');
        colForm.classList.remove('rounded');
      }
    }
  }

  // Método privado para inicializar o formulário de e-mail
  private initForm(): void {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(7), Validators.maxLength(50)]]
    });
  }

}
