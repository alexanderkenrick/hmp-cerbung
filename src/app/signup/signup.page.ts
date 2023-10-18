import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

  username = ''
  password = ''
  repassword = ''
  url = ''

  signUp(){
    if(this.password === this.repassword){
      this.router.navigate(['/signin'])
    }
  }
  constructor(private router: Router) { }

  ngOnInit() {
  }

}
