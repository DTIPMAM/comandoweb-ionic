import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

export function usernameValidator(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {

    const value = control.value;

    if (!value) {
        return null;
    }

    let lenghtValid  = false;

    if (value === "admin"){
      lenghtValid = true;
    } else if (value.length === 11) {
      lenghtValid = true;
    }

    return !lenghtValid?{usernameIsValid:true}: null;
  }
}

