import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Admin Components
import { AdminpageComponent } from './components/adminpage/adminpage.component'
import { HomeComponent } from './components/dashboardpage/home/home.component';
import { AddComponent } from './components/dashboardpage/add/add.component';
import { SettingsComponent } from './components/dashboardpage/settings/settings.component';
//Home Components
import { HomepageComponent } from './components/homepage/homepage.component'
import { SignuppageComponent } from './components/signuppage/signuppage.component'


//Page Not Found Component
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component'

const routes: Routes = [
  { path: '', redirectTo: '/home',pathMatch:'full'},
  { path: 'home', component: HomepageComponent }, 
  { path: 'inscription', component: SignuppageComponent },
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
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
