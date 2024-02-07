export interface UserSystemInterface {
  idUser: string;
  user: string;
  nome: string; 
  grupos: Array<string>; 
  exp: number;
}

export interface User {
  username: string;
  password: string;
  roles?: Array<string>;
}