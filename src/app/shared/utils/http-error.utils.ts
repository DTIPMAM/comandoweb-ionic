import { HttpErrorMessage } from './../interfaces/http-error-message';
import { HttpErrorResponse } from '@angular/common/http';

export class HttpErrorUtils {
    public static getError(error: HttpErrorResponse): HttpErrorMessage {

        if (error.error.MENSAGEM !== undefined){
            return {
                message: error.error.MENSAGEM,
                alert: true,
                console: false 
            };
        }

        if (error.error.MESSAGE !== undefined){
            return {
                message: error.error.MESSAGE,
                alert: true,
                console: false
            };
        }

        if (error.error.message !== undefined){
            return {
                message: error.error.message,
                alert: true,
                console: false
            };
        }

        if (typeof(error.error) === "string"){
            return {
                message: error.error,
                alert: true,
                console: false
            };
        }

        return {
            message: error.message,
            alert: true,
            console: true
        };
    }
}