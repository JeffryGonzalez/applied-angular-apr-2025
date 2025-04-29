import { Routes } from '@angular/router';
import { DemosComponent } from './demos';
import { SharedStateComponent } from './pages/shared-state';
import { SignalDemosComponent } from './pages/signal-demos';
import { GolfStore } from './services/golf-store';
export const DEMO_ROUTES: Routes = [
  {
    path: '',
    component: DemosComponent,
    providers: [GolfStore], // scope - is only anywhere in the demos route. but will live after the route is left
    children: [
      {
        path: 'signals',
        component: SignalDemosComponent,
      },
      {
        path: 'shared-state',
        component: SharedStateComponent,
      },
    ],
  },
];
