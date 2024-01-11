export interface LoginInterface {
    username: string;
    password: string;
}

export interface JwtTokenInterface {
    jwtToken: string;
    retorno?: string;
    message?: string;
}