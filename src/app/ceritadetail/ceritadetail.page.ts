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

  id = 0
  judul:string= ""
  url:string =  ""
  writer:string =  ""
  genre:string = ""
  status:string = ""
  dateCreated:string = ""
  deskripsi:string =  ""
  tempStatus :string = ""
  text = ""
  paragrafs:any={}
  user_id = ""

  TambahParagraf() {
    this.user_id=localStorage.getItem("app_username")??''
    this.ceritaservice.addParagraf(this.id, this.user_id, this.text).subscribe((response: any) => {
      if(response.result==='success'){
        alert(response.message)  
        this.router.navigate(['/ceritadetail/'+this.id])
      }
      else
      {
        alert(response.message)
      }
    });
    // New Object
    // this.tempParagraf ={
    //   text: this.text,
    //   writer: "User",
    // }
    // this.ceritas[this.index]['paragraf'].push(this.tempParagraf)
    // this.router.navigate(['/ceritadetail/'+this.index])
  }
  
  constructor(private route:ActivatedRoute, private ceritaservice:CeritaserviceService,private router: Router ) { }

  ngOnInit() {
    // this.route.params.subscribe(params=>{
    //   this.id = params['id']
    //   this.ceritaservice.ceritaDetail(params['id']).subscribe(
    //     (data)=> {
          
    //       if(data.cerita.akses_publik==0){
    //         this.tempStatus = "Restricted"
    //       }else{
    //         this.tempStatus = "Public"
    //       }
    //       this.judul= data.cerita.judul,
    //       this.url= data.cerita.gambar,
    //       this.writer = data.cerita.users_id_pembuat,
    //       this.genre = data.cerita.genre,
    //       this.status = this.tempStatus,
    //       this.dateCreated = data.cerita.tgl_buat,
    //       this.deskripsi = data.cerita.deskripsi,

    //       this.paragrafs=data.paragrafs;
    //     });
    // })
  }

}
