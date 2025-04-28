import { Routes } from '@angular/router';
import { DemosComponent } from './demos';
import { SignalDemosComponent } from './pages/signal-demos';
export const DEMO_ROUTES: Routes = [
  {
    path: '',
    component: DemosComponent,
    children: [
      {
        path: 'signals',
        component: SignalDemosComponent,
      },
    ],
  },
];
