import { Component, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';
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

  // signUp(){
  //   if(this.password === this.repassword){
  //     this.router.navigate(['/signin'])
  //   }
  // }

  signUp(){
    if(this.password === this.repassword){
      this.userservice.signUp(this.username,this.password,this.url).subscribe((response: any) => {
        if(response.result==='success'){
          alert(response.message) 
          this.router.navigate(['/signin'])
        }
        else
        {
          alert(response.message)
        }
      });
    }else{
      alert("Password tidak sama")
    }
    
  }
  constructor(private userservice: UserserviceService, private router: Router) { }

  ngOnInit() {
  }

}
