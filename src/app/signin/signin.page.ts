import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CeritaserviceService } from '../ceritaservice.service';
import { AuthGuardService } from '../services/auth-guard.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  isSignnedIn:any
  username: string = "";
  password: string = "";

  login(){
    if(this.username == "user" && this.password=="user"){
      this.authGuard.isSiggnedIn = true
      console.log(this.authGuard.isSiggnedIn)
      this.navController.navigateRoot('/home');
    }
  }

  constructor(private navController: NavController, private authGuard: AuthGuardService) { }

  ngOnInit() {
    this.isSignnedIn=this.authGuard.isSiggnedIn
  }
  ionViewDidEnter(){
    console.log(this.isSignnedIn)
  }

}
