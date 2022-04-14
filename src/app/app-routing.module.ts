import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './components/landing/landing.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import {canActivate,redirectUnauthorizedTo,redirectLoggedInTo} from '@angular/fire/auth-guard';
const redirectToLogin =()=>redirectUnauthorizedTo(['login']);
const redirectToHome =()=>redirectLoggedInTo(['home']);

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: LandingComponent
  },
  {
    path:'login',
    component: SignInComponent,
    ...canActivate(redirectToHome)
  
  },
  
  {
    path:'sign-up',
    component: SignUpComponent,
    ...canActivate(redirectToHome)
  
  },
  
  {
    path:'home',
    component: HomeComponent,
    ...canActivate(redirectToLogin)
  
  },
  
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
