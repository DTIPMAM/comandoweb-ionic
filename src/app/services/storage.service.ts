// Importa o decorator Injectable do Angular core, que permite a injeção de dependência.
import { Injectable } from '@angular/core';

// Decorador Injectable: define que a classe pode ser injetada como um serviço no Angular.
@Injectable({
  providedIn: 'root' // Indica que esta instância do serviço será compartilhada em todo o aplicativo.
})
export class LocalStorageService {
  // Propriedade privada para armazenar uma referência ao objeto de armazenamento local do navegador.
  private storage: Storage;

  // Construtor da classe.
  constructor(){
    // Inicializa a propriedade 'storage' com o objeto de armazenamento local do navegador.
    this.storage = window.localStorage;
  }

  // Método para definir um item no armazenamento local.
  public setItem(key: string, value: string): boolean {
    // Verifica se o objeto de armazenamento local está disponível.
    if (this.storage){
      // Usa o método setItem para armazenar a chave e valor no armazenamento local.
      this.storage.setItem(key, value);
      // Retorna true para indicar que a operação foi bem-sucedida.
      return true;
    }
    // Retorna false se o objeto de armazenamento local não estiver disponível.
    return false;
  }

  // Método para remover um item do armazenamento local.
  public removeItem(key: string): boolean {
    // Verifica se o objeto de armazenamento local está disponível.
    if (this.storage){
      // Usa o método removeItem para remover o item com a chave especificada.
      this.storage.removeItem(key);
      // Retorna true para indicar que a operação foi bem-sucedida.
      return true;
    }
    // Retorna false se o objeto de armazenamento local não estiver disponível.
    return false;
  }

  // Método para obter um item do armazenamento local.
  public getItem(key: string): string | null {
    // Retorna o valor associado à chave especificada no armazenamento local.
    return this.storage.getItem(key);
  }

  // Método para limpar completamente o armazenamento local.
  public clear(): boolean {
    // Verifica se o objeto de armazenamento local está disponível.
    if (this.storage){
      // Usa o método clear para remover todos os itens do armazenamento local.
      this.storage.clear();
      // Retorna true para indicar que a operação foi bem-sucedida.
      return true;
    }
    // Retorna false se o objeto de armazenamento local não estiver disponível.
    return false;
  }
}
