// Interface para representar a estrutura de um usuário no sistema.
export interface UserSystemInterface {
  idUser: string;
  user: string;
  nome: string;
  grupos: Array<string>;
  exp: number;
}

// Interface para representar a estrutura de dados necessária para criar um novo usuário.
export interface User {
  username: string;
  password: string;
  roles?: Array<string>;
}
