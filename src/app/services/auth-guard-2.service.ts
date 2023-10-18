import { Injectable, OnInit } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGuardService } from './auth-guard.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService2 implements CanActivate, OnInit {

  isSignnedIn:any

  constructor(private router: Router,private authGuard: AuthGuardService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(this.authGuard.isSiggnedIn){
      
      this.router.navigate(['home'])
      return false
    }
    return true
  }

  ngOnInit() {
    this.isSignnedIn=this.authGuard.isSiggnedIn
  }
}
