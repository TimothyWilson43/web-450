import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule } from "@angular/material";
import { MatCardModule } from '@angular/material/card'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';

// components 
import { NotFoundComponent } from './not-found/not-found.component';
import { SigninComponent } from './signin/signin.component';

import { SessionRoutes } from './session.routing';
import { QzselectionComponent } from './qzselection/qzselection.component';
import { QuizpageComponent } from './quizpage/quizpage.component';
import { CompileComponent } from './compile/compile.component';

@NgModule({
  declarations: [
    NotFoundComponent, 
    SigninComponent, QzselectionComponent, QuizpageComponent, CompileComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(SessionRoutes),
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatCardModule,
    FormsModule,
    MatRadioModule,
    ReactiveFormsModule,
  ]
})
export class SessionModule { }
