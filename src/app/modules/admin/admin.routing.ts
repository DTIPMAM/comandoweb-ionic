import { AdminComponent } from './admin.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'admin',
    children: [
      {
        path: '',
        title: 'Painel Administrador',
        component: AdminComponent,
      }
    ]
  },
];

export const AdminRoutes = RouterModule.forChild(routes);
