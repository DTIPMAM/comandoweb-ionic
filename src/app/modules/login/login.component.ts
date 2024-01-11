import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { LoginInterface, JwtTokenInterface } from './../../shared/interfaces/login.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { constants } from '../../../environments/constants';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebTokenService } from '../../services/auth/web-token.service';
import { UserService } from '../../services/user.service';
import { usernameValidator } from '../../shared/directives/username.validator';
import { error } from '@angular/compiler-cli/src/transformers/util';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public copyright: string = constants.copyright;
  public loginForm: FormGroup;
  private fromUrl: string;
  public isLoadingLogin: boolean = false;
  public alertMessage: string;
  public isHaveError: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private webTokenService: WebTokenService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => this.fromUrl = params['fromUrl']);
    this.initStylesEvents();
  }

  private initStylesEvents(): void {
    this.initLoginForm();
    this.adjustDisplayHeight();
    window.addEventListener('resize', this.adjustDisplayHeight);
  }

  // Add or remove style scss class by window width size
  private adjustDisplayHeight(): void {
    const loginSection = document.getElementById('login-section');
    const links = document.getElementById('links');
    const bannerDTI = document.getElementById('banner-dti-block');
    if (loginSection !== null && links !== null && bannerDTI !== null){
      const width: number = window.innerWidth;
      if (width >= 1368) {
        links.classList.remove('small-text-links');
        bannerDTI.style.display = "block";
      } else {
        links.classList.add('small-text-links');
        bannerDTI.style.display = "none";
      }

      if (width >= 992){
        loginSection.classList.add('hd-login');
      } else {
        loginSection.classList.remove('hd-login');
      }
    }
  }

  private initLoginForm(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(11), usernameValidator()]],
      password: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(15)]]
    });
  }

  public submitForm(): void {
    if (this.loginForm.valid){
      this.isHaveError = false;
      this.isLoadingLogin = true;

      // Remova esta parte quando for utilizar o login verdadeiro
      if (this.webTokenService.setToken(environment.fakeToken) && this.webTokenService.setTokenValid()){
        setTimeout(() => {
          this.fromUrl?this.router.navigateByUrl(this.fromUrl):this.router.navigate(['home']);
        }, 2000);
      }
      
      // Descomente e edite quando for utilizar a API real de login
      // const subscription = this.userService.login(this.loginForm.value as LoginInterface).subscribe({
      //     next: (response: JwtTokenInterface) => {      
      //       if (response.jwtToken !== undefined) {
      //         if (this.webTokenService.setToken(response.jwtToken) && this.webTokenService.setTokenValid()){
      //           this.fromUrl?this.router.navigateByUrl(this.fromUrl):this.router.navigate(['home']);
      //         } else {
      //           let msgError: string = "Não foi possível salvar o token so usuário!"; 
      //           console.log(msgError);
      //           this.loginForm.reset();
      //           this.alertMessage = msgError;
      //           this.isLoadingLogin = false;
      //           this.isHaveError = true;
      //           this.userService.logout();
      //         }
      //       } else {
      //         this.loginForm.reset();
      //         this.alertMessage = response.message?response.message+".":'';
      //         this.isLoadingLogin = false;
      //         this.isHaveError = true;
      //       }
      //     },
      //     error: (error: HttpErrorResponse) => {
      //       this.loginForm.reset();
      //       this.isLoadingLogin = false;
      //       this.isHaveError = true;
      //     }
      // });
      // subscription.unsubscribe();
    } else {
      this.alertMessage = "Preencha CPF e senha";
      this.isHaveError = true;
    }
  }

  public resetError(isClosedAlert: boolean): void {
    if (isClosedAlert) {
      this.isHaveError = false;
      this.alertMessage = '';
    }
  }

  public navigateTo(url:string): void {
    window.open(url, "_blank");
  }
}
