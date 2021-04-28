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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {TokenInterceptorService} from './services/token-interceptor.service'
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AuthService } from './services/auth.service';

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
    DashboardNavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [AuthService,{
    provide: HTTP_INTERCEPTORS,
    useClass:TokenInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
