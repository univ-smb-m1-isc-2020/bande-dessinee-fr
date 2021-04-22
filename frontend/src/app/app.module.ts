import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { DashboardpageComponent } from './components/dashboardpage/dashboardpage.component';
import { SignuppageComponent } from './components/signuppage/signuppage.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AdminpageComponent,
    DashboardpageComponent,
    SignuppageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
