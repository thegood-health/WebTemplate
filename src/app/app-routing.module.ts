import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { MainComponent } from './components/main/main.component';
import {AuthGuard} from "./auth-guard.service";

import {
  NbAuthComponent,
  NbLoginComponent,
  NbRegisterComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';


const routes: Routes = [
  { path: '',
    pathMatch: 'full',
    component: MainComponent,
    canActivate: [AuthGuard], // here we tell Angular to check the access with our AuthGuard
 },
  // { path: 'login', component: LogInComponent },
  // { path: 'register', component: RegisterComponent },
  { path: 'main',
    component: MainComponent,
    canActivate: [AuthGuard], // here we tell Angular to check the access with our AuthGuard
 },
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: 'login',
        component: NbLoginComponent,
      },

      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
    ],
  }

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
