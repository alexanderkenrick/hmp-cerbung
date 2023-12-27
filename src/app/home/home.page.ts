import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CeritaserviceService } from '../ceritaservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  ceritas:any[]=[]
  judul=""
  constructor(private ceritaservice: CeritaserviceService, private router: Router) {}
  Search() {
    this.ceritaservice.ceritaSearch(this.judul).subscribe(
      (data) => {
        this.ceritas = data;
      }
    )
  }
  // ToCerita(id:any){
  //   this.router.navigate(['/ceritadetail/'+id])
  // }

  ngOnInit() {
    this.ceritaservice.ceritaList().subscribe(
      (data) => {
        this.ceritas = data;
      });
  }
}
