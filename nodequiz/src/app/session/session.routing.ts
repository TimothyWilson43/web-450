// Angular imports
import { Routes } from '@angular/router';


// Session component imports
import { NotFoundComponent } from './not-found/not-found.component';
import { SigninComponent } from './signin/signin.component';
import { QzselectionComponent } from './qzselection/qzselection.component';
import { QuizpageComponent } from './quizpage/quizpage.component';

export const SessionRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '404',
        component: NotFoundComponent
      },
      { 
        path: 'signin', 
        component: SigninComponent
      },
      {
        path: 'qzselection',
        component: QzselectionComponent
      },
      {
        path: 'quizpage',
        component: QuizpageComponent
      }
      
    ]
  },
  
];
