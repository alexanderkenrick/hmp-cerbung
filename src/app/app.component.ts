import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { AuthGuardService } from 'src/app/services/auth-guard.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private router: Router, private navController: NavController, private authGuard: AuthGuardService) {}

  username:string =''
  logout(){
    this.username=""
    localStorage.removeItem("app_username")
    localStorage.removeItem("app_fullname")
    this.authGuard.isSiggnedIn = false
    window.location.reload()
  }


  ngOnInit() {
    this.username=localStorage.getItem("app_username") ?? ''
    if(this.username!=''){
      this.authGuard.isSiggnedIn = true
      this.navController.navigateRoot('/home');
    }
  }
}
