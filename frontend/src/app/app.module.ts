import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { SignuppageComponent } from './components/signuppage/signuppage.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/dashboardpage/home/home.component';
import { AddComponent } from './components/dashboardpage/add/add.component';
import { SettingsComponent } from './components/dashboardpage/settings/settings.component';
import { DashboardNavComponent } from './components/dashboardpage/dashboard-nav/dashboard-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AdminpageComponent,
    SignuppageComponent,
    PageNotFoundComponent,
    HomeComponent,
    AddComponent,
    SettingsComponent,
    DashboardNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
