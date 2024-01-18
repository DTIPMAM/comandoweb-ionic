import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { constants } from 'src/environments/constants';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  @ViewChild('stepper')
  private signupStepper!: MatStepper; // Referência para o MatStepper na view
  public isStepEditable: boolean = false; // Flag para controlar se o passo do formulário é editável
  public copyright: string = constants.copyright; // Propriedade para armazenar informações de direitos autorais
  public checkMilitaryForm!: FormGroup; // Formulário reativo para a etapa de verificação militar
  public createPasswordForm!: FormGroup; // Formulário reativo para a etapa de criação de senha

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.initForms();
  }

  ngOnInit() {
    this.adjustDisplayHeight();
    window.addEventListener('resize', this.adjustDisplayHeight);
  }

  // Adiciona ou remove uma classe de estilo com base na largura da janela
  private adjustDisplayHeight(): void {
    const signupSection = document.getElementById('signup-section');
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

  // Inicializa os formulários reativos
  private initForms(): void {
    this.checkMilitaryForm = this.formBuilder.group({
      checked: [false, [Validators.required, Validators.requiredTrue]]
    });
    this.createPasswordForm = this.formBuilder.group({
      password: [false, [Validators.required, Validators.requiredTrue]]
    })
  }

  // Define o valor do formulário de verificação militar e avança para o próximo passo se necessário
  public setMilitaryFormValue(value:boolean): void {
    this.checkMilitaryForm.patchValue({
      checked: value
    });

    if (value) {
      this.goToNextStep();
    }
  }

  // Define o valor do formulário de criação de senha e avança para o próximo passo se necessário
  public setPasswordForm(value:boolean): void {
    this.createPasswordForm.patchValue({
      password: value
    });

    if (value) {
      this.goToNextStep();
    }
  }

  public setPasswordFormValue(): void {

  }

  // Avança para o próximo passo no stepper
  public goToNextStep(): void {
    this.signupStepper.next();
  }
}
