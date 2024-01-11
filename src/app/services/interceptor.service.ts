import { HttpErrorUtils } from './../shared/utils/http-error.utils';
import { HttpErrorMessage } from './../shared/interfaces/http-error-message';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {
    constructor(
        private userService: UserService,
        private router: Router
    ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const tokenBackend: string = this.userService.getUserToken();

        if (this.userService.isTokenExpired()) {
            if (this.userService.isLogged()){
                window.alert("Ops! Sua sessão expirou, faça login novamente.");
                this.logout();
            }
        }

        if (tokenBackend !== null && tokenBackend !== undefined){
            req = req.clone({
                setHeaders: {
                    'Authorization': 'Bearer ' + tokenBackend
                }
            });
        }
        
        return next.handle(req).pipe(
            tap({
                next: () => {},
                error: (error: HttpErrorResponse) => {
                    if (error.status === 401){
                        this.logout();
                    } else if (!error.message.includes("site/api-token")){
                        this.onError(error);
                    }
                }
            })
        );
    }

    private logout(): void {
        this.userService.logout();
        this.router.navigate(['/']);
    }

    private onError(error: HttpErrorResponse): void {
        const iError: HttpErrorMessage = HttpErrorUtils.getError(error);

        if (iError.alert){
            window.alert(`Ops! Houve um erro. \n${iError.message}`);
        }

        if (iError.console){
            console.log(iError.message);
        }
    }
}