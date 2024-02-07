import { MaintenanceComponent } from './../errors/maintenance/maintenance.component';
import { AdminRoutesAuthGuard } from './../services/auth/admin-route-auth.guard';
import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    title: 'SX - Base Angular DTI',
    component: HomeComponent,
  },
  {
    path: '',
    loadChildren: () => import('../modules/admin/admin.module').then((m) => m.AdminModule),
    canActivate: [AdminRoutesAuthGuard]
  },
  {
    path: 'perguntas-frequentes',
    title: 'Perguntas Frequentes',
    component: MaintenanceComponent
  }
];

export const HomeRoutes = RouterModule.forChild(routes);
