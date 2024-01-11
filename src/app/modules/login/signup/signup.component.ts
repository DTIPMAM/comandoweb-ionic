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
  @ViewChild('stepper') private signupStepper: MatStepper;
  public isStepEditable: boolean = false;
  public copyright: string = constants.copyright;
  public checkMilitaryForm: FormGroup;
  public createPasswordForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.initForms();
  }

  ngOnInit() {
    this.adjustDisplayHeight();
    window.addEventListener('resize', this.adjustDisplayHeight);
  }

  // Add or remove style scss class by window width size
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

  private initForms(): void {
    this.checkMilitaryForm = this.formBuilder.group({
      checked: [false, [Validators.required, Validators.requiredTrue]]
    });
    this.createPasswordForm = this.formBuilder.group({
      password: [false, [Validators.required, Validators.requiredTrue]]
    })
  }


  public setMilitaryFormValue(value:boolean): void {
    this.checkMilitaryForm.patchValue({
      checked: value
    });

    if (value) {
      this.goToNextStep();
    }
  }

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

  public goToNextStep(): void {
    this.signupStepper.next();
  }
}
