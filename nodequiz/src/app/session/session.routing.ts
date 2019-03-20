// Angular imports
import { Routes } from '@angular/router';

// Session component imports
import { NotFoundComponent } from './not-found/not-found.component';

export const SessionRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '404',
        component: NotFoundComponent
      }
    ]
  }
];
