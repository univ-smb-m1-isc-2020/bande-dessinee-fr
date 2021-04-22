import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//Admin Components
import { AdminpageComponent } from './components/adminpage/adminpage.component'
import { DashboardpageComponent } from './components/dashboardpage/dashboardpage.component'

//Home Components
import { HomepageComponent } from './components/homepage/homepage.component'
import { SignuppageComponent } from './components/signuppage/signuppage.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent },
  { path: 'inscription', component: SignuppageComponent },
  { path: 'admin', component: AdminpageComponent },
  { path: 'admin/dashboard ', component: DashboardpageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
