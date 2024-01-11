import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.scss']
})
export class CreatePasswordComponent implements OnInit {
  @Output() onPasswordValid = new EventEmitter<boolean>;

  constructor() { }

  ngOnInit() {
  }

  public emitPasswordValidation(): void {
    this.onPasswordValid.emit(true);
  }

}
