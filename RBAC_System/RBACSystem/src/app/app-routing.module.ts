import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { UserPortalComponent } from './components/user-portal/user-portal.component';
import { AdminportalComponent } from './components/adminportal/adminportal.component';
import { ManagerPortalComponent } from './components/manager-portal/manager-portal.component';
import { adminAuthGuard } from './guards/admin-auth.guard';
import { managerAuthGuard } from './guards/manager-auth.guard';
import { userAuthGuard } from './guards/user-auth.guard';

const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:"login",component:LoginComponent
  },
  {
    path:"user",component:UserPortalComponent,canActivate:[userAuthGuard]
  },
  {
    path:"admin",component:AdminportalComponent,canActivate:[adminAuthGuard]
  },
  {
    path:"manager",component:ManagerPortalComponent,canActivate:[managerAuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
