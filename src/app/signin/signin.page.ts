import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CeritaserviceService } from '../ceritaservice.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  isLoggedIn = false
  username: string = "";
  password: string = "";

  login(){
    if(this.username == "user" && this.password=="user"){
      this.isLoggedIn = true
      console.log(this.isLoggedIn)
      this.navController.navigateRoot('/home');
    }
  }

  constructor(private navController: NavController) { }

  ngOnInit() {
    if(this.isLoggedIn){
      console.log(this.isLoggedIn)
      this.navController.navigateRoot('/home');
    }
  }
  ionViewDidEnter(){
    if(this.isLoggedIn){
      console.log(this.isLoggedIn)
      this.navController.navigateRoot('/home');
    }
  }

}
