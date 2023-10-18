import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{
  constructor(private router: Router) {}

  showTabs = true;

  ngOnInit() {
    console.log("URL: "+this.router.url)
      if (this.router.url === '/signin' || this.router.url === '/signup') {
        this.showTabs = false; // <-- hide tabs on specific pages
      }
  }
}
