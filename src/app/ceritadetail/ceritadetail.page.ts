import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CeritaserviceService } from '../ceritaservice.service';

@Component({
  selector: 'app-ceritadetail',
  templateUrl: './ceritadetail.page.html',
  styleUrls: ['./ceritadetail.page.scss'],
})
export class CeritadetailPage implements OnInit {

  index = 0
  ceritas:any[]=[]
  text = ""
  tempParagraf={
    text: "",
    writer: "User",
  }


  TambahParagraf() {
    // New Object
    this.tempParagraf ={
      text: this.text,
      writer: "User",
    }
    this.ceritas[this.index]['paragraf'].push(this.tempParagraf)
    this.router.navigate(['/ceritadetail/'+this.index])
  }
  constructor(private route:ActivatedRoute, private ceritaservice:CeritaserviceService,private router: Router ) { }

  ngOnInit() {
    this.ceritas = this.ceritaservice.ceritas
    this.route.params.subscribe(params=>{
      this.index = params['id']
    })
  }

}
