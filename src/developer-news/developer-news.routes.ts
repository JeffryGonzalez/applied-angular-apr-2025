import { Routes } from '@angular/router';
import { DeveloperNewsComponent } from './developer-news';
import { ListComponent } from './pages/list';
export const DEVELOPER_NEWS_ROUTES: Routes = [
  {
    path: '',
    component: DeveloperNewsComponent,
    children: [
      {
        path: 'list',
        component: ListComponent,
      },
    ],
  },
];
