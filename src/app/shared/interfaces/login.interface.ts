// Interface para representar a estrutura de dados necessária para realizar o login.
export interface LoginInterface {
  username: string;
  password: string;
}

// Interface para representar a estrutura de um token JWT (JSON Web Token).
export interface JwtTokenInterface {
  jwtToken: string;
  retorno?: string;
  message?: string;
}
