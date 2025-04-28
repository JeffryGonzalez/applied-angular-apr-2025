import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard';
import { HomeComponent } from './pages/home';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'demos',
    loadChildren: () =>
      import('../demos/demos.routes').then((r) => r.DEMO_ROUTES),
  },
];
