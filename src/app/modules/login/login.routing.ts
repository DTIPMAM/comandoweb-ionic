import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    title: 'SX - Entrar no Sistema',
    component: LoginComponent,
  },
  {
    path: 'signup',
    title: 'SX - Cadastrar Usuário',
    component: SignupComponent
  },
  {
    path: 'recover-password',
    title: 'SX - Recuperar Senha',
    component: RecoverPasswordComponent
  }
];

export const LoginRoutes = RouterModule.forChild(routes);
