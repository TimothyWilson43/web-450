import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule } from "@angular/material";
import { MatCardModule } from '@angular/material/card'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MDCFormField} from '@material/form-field';
import {MDCRadio} from '@material/radio';

const radio = new MDCRadio(document.querySelector('.mdc-radio'));
const formField = new MDCFormField(document.querySelector('.mdc-form-field'));
formField.input = radio;

// components 
import { NotFoundComponent } from './not-found/not-found.component';
import { SigninComponent } from './signin/signin.component';

import { SessionRoutes } from './session.routing';
import { QzselectionComponent } from './qzselection/qzselection.component';
import { QuizpageComponent } from './quizpage/quizpage.component';

@NgModule({
  declarations: [
    NotFoundComponent,
    SigninComponent, QzselectionComponent, QuizpageComponent
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
    ReactiveFormsModule,
    MDCFormField,
    MDCRadio
  ]
})
export class SessionModule { }
