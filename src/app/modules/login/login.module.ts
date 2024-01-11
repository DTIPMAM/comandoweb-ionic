import { CreatePasswordComponent } from './signup/create-password/create-password.component';
import { CheckMilitaryComponent } from './signup/check-military/check-military.component';
import { LogoPmamLoginModule } from '../../shared/modules/logo-pmam-login/logo-pmam-login.module';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { SignupComponent } from './signup/signup.component';
import { LoginRoutes } from './login.routing';
import { SharedModule } from '../../shared/style/shared-module.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { NgxLoaderModule } from '../../shared/modules/ngx-loader/ngx-loader.module';

@NgModule({
  imports: [
    CommonModule,
    LogoPmamLoginModule,
    SharedModule,
    NgxLoaderModule,
    LoginRoutes
  ],
  declarations: [
    LoginComponent,
    SignupComponent,
    CheckMilitaryComponent,
    CreatePasswordComponent,
    RecoverPasswordComponent
  ]
})
export class LoginModule { }
