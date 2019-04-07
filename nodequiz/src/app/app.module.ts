import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule, MatIconModule, MatMenuModule, MatToolbarModule} from "@angular/material";

import { AppComponent } from './app.component';
import { BaseLayoutComponent } from './shared';
import { FooterComponent } from './shared';
import { HeaderComponent } from './shared';
import { AuthLayoutComponent } from './shared';

import { AppRoutes } from './app.routing';

@NgModule({
  declarations: [
    AppComponent,
    BaseLayoutComponent,
    FooterComponent,
    HeaderComponent,
    AuthLayoutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes, { useHash: true, enableTracing: false }),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
