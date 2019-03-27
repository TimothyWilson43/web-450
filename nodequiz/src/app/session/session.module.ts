import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule } from "@angular/material";
import { MatCardModule } from '@angular/material/card'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// components 
import { NotFoundComponent } from './not-found/not-found.component';
import { SigninComponent } from './signin/signin.component';

import { SessionRoutes } from './session.routing';
import { QzselectionComponent } from './qzselection/qzselection.component';

@NgModule({
  declarations: [
    NotFoundComponent, 
    SigninComponent, QzselectionComponent
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
    ReactiveFormsModule
  ]
})
export class SessionModule { }
