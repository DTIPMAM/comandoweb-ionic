import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from "@angular/forms";

  // Função de validação personalizada para verificar a validade da senha.
  // A senha deve ser diferente de "admin" e ter pelo menos um caractere.


export function passwordValidator(): ValidatorFn {
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
    } else if (value.length > 0) {
      lenghtValid = true;
    }

    // Retorna um objeto de erro se o comprimento não for válido
    return !lenghtValid?{passwordIsValid:true}: null;
  }
}

