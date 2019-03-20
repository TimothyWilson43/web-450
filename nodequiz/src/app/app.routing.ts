import { Routes } from '@angular/router';
import {BaseLayoutComponent} from './shared';
import {AuthLayoutComponent} from './shared';

export const AppRoutes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: './home/home.module#HomeModule'
      },
      {
        path: 'home',
        loadChildren: './home/home.module#HomeModule'
      },
    ]
  },
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {
        path: 'session',
        loadChildren: './session/session.module#SessionModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'session/404'
  }
];
