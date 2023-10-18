import { Component, OnInit } from '@angular/core';
import { CeritaserviceService } from '../ceritaservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  ceritas:any[]=[]
  constructor(private ceritaservice: CeritaserviceService) {}

  ngOnInit() {
    this.ceritas=this.ceritaservice.ceritas
  }
}
