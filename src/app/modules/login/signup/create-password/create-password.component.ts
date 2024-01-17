import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.scss']
})
export class CreatePasswordComponent implements OnInit {
  // EventEmitter usado para notificar o componente pai quando a senha é considerada válida
  @Output() onPasswordValid = new EventEmitter<boolean>;

  constructor() { }

  ngOnInit() {
  }

  // Método para emitir um evento indicando que a senha é válida
  public emitPasswordValidation(): void {
    this.onPasswordValid.emit(true);
  }

}
