import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

export function passwordValidator(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {

    const value = control.value;

    if (!value) {
        return null;
    }

    let lenghtValid  = false;

    if (value === "admin"){
      lenghtValid = true;
    } else if (value.length > 0) {
      lenghtValid = true;
    }

    return !lenghtValid?{passwordIsValid:true}: null;
  }
}

