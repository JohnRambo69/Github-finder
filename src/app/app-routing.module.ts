import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagenotfoundComponent } from './pages/pagenotfound/pagenotfound.component';
import { HomeComponent } from './pages/home/home.component';
import { SinginComponent } from './pages/singin/singin.component';
import { SingupComponent } from './pages/singup/singup.component';

import { AngularFireAuthGuard, redirectLoggedInTo, redirectUnauthorizedTo } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['signin']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['']);

const routes: Routes = [
    { 
      path: 'signin', 
    component: SinginComponent,        
    canActivate: [AngularFireAuthGuard], 
    data: { authGuardPipe: redirectLoggedInToHome },
  },
  {
    path: 'signup',
    component: SingupComponent,
  },
  {
    path: '',
    component: HomeComponent,
    canActivate: [AngularFireAuthGuard], 
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
