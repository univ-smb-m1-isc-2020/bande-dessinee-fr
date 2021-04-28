import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminpageComponent } from './components/adminpage/adminpage.component';
import { SignuppageComponent } from './components/signuppage/signuppage.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/dashboardpage/home/home.component';
import { AddComponent } from './components/dashboardpage/add/add.component';
import { SettingsComponent } from './components/dashboardpage/settings/settings.component';
import { DashboardNavComponent } from './components/dashboardpage/dashboard-nav/dashboard-nav.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { AuthService } from './services/auth.service';
import { MoviesComponent } from './components/movies/movies.component';
import { PublishersComponent } from './components/publishers/publishers.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { SigninpageComponent } from './components/signinpage/signinpage.component';
import { MovieComponent } from './components/movie/movie.component';
import { NavComponent } from './components/nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AdminpageComponent,
    SignuppageComponent,
    PageNotFoundComponent,
    HomeComponent,
    AddComponent,
    SettingsComponent,
    DashboardNavComponent,
    MoviesComponent,
    PublishersComponent,
    NotificationsComponent,
    SigninpageComponent,
    MovieComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
