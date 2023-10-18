import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { CeritaserviceService } from '../ceritaservice.service';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {

  isLogedIn = 0
  username: string = "";
  password: string = "";

  login(){
    if(this.username == "user" && this.password=="user"){
      this.isLogedIn = 1
      this.navController.navigateRoot('/home');
    }
  }

  constructor(private navController: NavController) { }

  ngOnInit() {
    if(this.isLogedIn==1){
      this.navController.navigateRoot('/home');
    }
  }

}
