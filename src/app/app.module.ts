import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ToastrModule } from 'ngx-toastr';

import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './core/app-header/app-header.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { ErrorHandlingService } from './shared/services/errorhandling.service';
import { IssueCardComponent } from './core/dashboard/issue-card/issue-card.component';
import { ProfileComponent } from './core/profile/profile.component';
import { HttpService } from './shared/services/http.service';
import { SessionStorageService } from './shared/services/sessionstorage.service';
import { WindowRef } from './shared/services/window-ref';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    DashboardComponent,
    ProfileComponent,
    IssueCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash: true}),
    ToastrModule.forRoot()
  ],
  providers: [
    HttpClientModule,
    HttpClient,
    HttpService,
    ErrorHandlingService,
    SessionStorageService,
    WindowRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
