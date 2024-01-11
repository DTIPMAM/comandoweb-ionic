import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { constants } from 'src/environments/constants';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recover-password',
  templateUrl: './recover-password.component.html',
  styleUrls: ['./recover-password.component.scss']
})
export class RecoverPasswordComponent implements OnInit {
  public copyright: string = constants.copyright;
  public emailForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.initForm();
    this.adjustDisplayHeight();
    window.addEventListener('resize', this.adjustDisplayHeight);
  }

  // Add or remove style scss class by window width size
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

  private initForm(): void {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email, Validators.minLength(7), Validators.maxLength(50)]]
    });
  }

}
