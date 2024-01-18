import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

  // Função de validação personalizada para verificar a validade do nome de usuário.
  // O nome de usuário deve ser "admin" ou ter exatamente 11 caracteres.

export function usernameValidator(): ValidatorFn {
  return (control:AbstractControl) : ValidationErrors | null => {

    // Obtém o valor do controle
    const value = control.value;

    // Se o valor for nulo, retorna null (sem erro)
    if (!value) {
        return null;
    }

    // Inicializa a variável para verificar o comprimento válido
    let lenghtValid  = false;

    // Verifica se o valor é "admin"
    if (value === "admin"){
      lenghtValid = true;
    } else if (value.length === 11) {
      // Verifica se o comprimento do valor é 11 caracteres
      lenghtValid = true;
    }

    // Retorna um objeto de erro se o comprimento não for válido
    return !lenghtValid?{usernameIsValid:true}: null;
  }
}

