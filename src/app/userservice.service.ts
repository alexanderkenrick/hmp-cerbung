import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  signUp(username: string, passoword: string, image: string) {
    //this.pastas.push({name:p_name,url:p_url,description:p_description,price:p_price})
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', passoword);
    body.set('image', image);
    const urlEncodedData = body.toString();
    return this.http.post(
      "https://ubaya.me/hybrid/160421023/uas/signup.php", urlEncodedData, { headers });
  }

  
  login(username: string, password:string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('username', username); 
    body.set('password', password);
    const urlEncodedData = body.toString();
    return this.http.post("https://ubaya.me/hybrid/160421023/uas/login.php", urlEncodedData, { headers });
  }
  constructor(private http: HttpClient) { }
}
