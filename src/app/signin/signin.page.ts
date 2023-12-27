import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CeritaserviceService } from '../ceritaservice.service';
import { UserserviceService } from '../userservice.service';
import { AuthGuardService } from '../services/auth-guard.service';
import { AppComponent } from '../app.component';


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
    this.userService.login(this.username, this.password).subscribe(
      (response:any) => {
        if(response.result==='success'){
          this.appComp.username = this.username
          this.authGuard.isSiggnedIn = true
          console.log(this.authGuard.isSiggnedIn)
          localStorage.setItem("app_username",this.username)
          this.navController.navigateRoot('/home');
        }else{
          alert(response.message)
        }
      }
    )
    // if(this.username == "user" && this.password=="user"){
    //   this.authGuard.isSiggnedIn = true
    //   console.log(this.authGuard.isSiggnedIn)
    //   this.navController.navigateRoot('/home');
    // }
  }

  constructor(private navController: NavController, private authGuard: AuthGuardService, private userService : UserserviceService, private appComp:AppComponent) { }

  ngOnInit() {
    this.username=localStorage.getItem("app_username") ?? ''
    console.log(localStorage.getItem("app_username"))
    if(this.username!=''){
      
      this.navController.navigateRoot('/home');
      this.isSignnedIn=this.authGuard.isSiggnedIn
    }
    
  }
  ionViewDidEnter(){
    console.log(this.isSignnedIn)
  }

}
