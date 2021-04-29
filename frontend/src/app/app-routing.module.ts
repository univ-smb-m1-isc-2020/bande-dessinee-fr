import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Admin Components
import { AdminpageComponent } from './components/adminpage/adminpage.component'
import { HomeComponent } from './components/dashboardpage/home/home.component';
import { AddComponent } from './components/dashboardpage/add/add.component';
import { SettingsComponent } from './components/dashboardpage/settings/settings.component';
//Home Components
import { SignuppageComponent } from './components/signuppage/signuppage.component'


//Page Not Found Component
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'
import { SigninpageComponent } from './components/signinpage/signinpage.component';
import { MoviesComponent } from './components/movies/movies.component';
import { PublishersComponent } from './components/publishers/publishers.component';
import { NotificationsComponent } from './components/notifications/notifications.component';
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
  { path: '', redirectTo: '/signin',pathMatch:'full'},
  { path: 'signin', component: SigninpageComponent }, 
  { path: 'signup', component: SignuppageComponent },
  { path: 'publishers', component: PublishersComponent },
  { path: 'notifications', component: NotificationsComponent },
  { path: 'movies', component: MoviesComponent },
  { path: 'movies:id', component: MovieComponent },
  
  {
    path: 'admin',
    component: AdminpageComponent,
  },
  {
    path: 'admin/home',
    component: HomeComponent,
  },
  {
    path: 'admin/add',
    component: AddComponent,
  },
  {
    path: 'admin/settings',
    component: SettingsComponent,
  },
  //{ path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
