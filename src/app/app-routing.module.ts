import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthGuardService2 } from './services/auth-guard-2.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'signin',
    loadChildren: () => import('./signin/signin.module').then( m => m.SigninPageModule),
    canActivate: [AuthGuardService2],
  },
  {
    path: 'createcerita',
    loadChildren: () => import('./createcerita/createcerita.module').then( m => m.CreateceritaPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'ceritadetail/:id',
    loadChildren: () => import('./ceritadetail/ceritadetail.module').then( m => m.CeritadetailPageModule),
    canActivate: [AuthGuardService],
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
