import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ROUTES } from './app.routes';

import { AppComponent } from './app.component';
import { AppHeaderComponent } from './core/app-header/app-header.component';
import { DashboardComponent } from './core/dashboard/dashboard.component';
import { IssueCardComponent } from './core/dashboard/issue-card/issue-card.component';
import { ProfileComponent } from './core/profile/profile.component';
import { LocalStorageService } from './shared/services/localstorage.service';
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
    HttpClientModule,
    RouterModule.forRoot(ROUTES, {useHash: true})
  ],
  providers: [
    HttpClientModule,
    HttpClient,
    LocalStorageService,
    WindowRef
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
