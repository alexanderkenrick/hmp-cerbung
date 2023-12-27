import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';
import { CeritaserviceService } from '../ceritaservice.service';

@Component({
  selector: 'app-createcerita',
  templateUrl: './createcerita.page.html',
  styleUrls: ['./createcerita.page.scss'],
})
export class CreateceritaPage implements OnInit {

  public alertButtons = ['OK'];
  ceritas:any[]=[]

  judul:string = ""
  writer:string = ""
  genre:string = ""
  url:string = ""
  deskripsi:string = ""
  status:string = ""
  paragraf:string = ""
  tempStatus: string = "1"

  currPage = 1
  page1Display:string = 'block'
  page2Display:string = 'none'
  page3Display:string = 'none'
  pageDisplay:string = 'block'
  
  // tempParagraf={
  //   text: "",
  //   writer: "",
  // }

  genres=["Action", "Comedy", "Drama", "Romance", "Mystery"]
  // cerita={
  //   judul: "",
  //   url: "",
  //   writer: "",
  //   genre: "",
  //   status: "", //restricted or public
  //   like : 0,
  //   dateCreated: "20/10/2023",
  //   deskripsi: "",
  //   // paragraf: [this.tempParagraf]
  // }

  handleChange(e:any) {
    this.genre = e.detail.value
  }

  addCerita(){
    
    if(this.status=='Restricted'){
      this.tempStatus = '0'
    }
    this.writer=localStorage.getItem("app_username")??''
    this.ceritaservice.addCerita(this.judul,this.url,this.writer,this.genre, this.tempStatus, this.deskripsi, this.paragraf).subscribe((response: any) => {
      if(response.result==='success'){
        alert(response.message)  
        this.route.navigate(['/home'])
      }
      else
      {
        alert(response.message)
      }
    });
  }

  // addCerita(){
    
  //   this.tempParagraf={
  //     text: this.text,
  //     writer: this.writer,
  //   }
  //   this.cerita={
  //     judul: this.judul,
  //     url: this.url,
  //     writer: this.writer,
  //     genre: this.genre,
  //     status: this.status, //restricted or public
  //     like : 0,
  //     dateCreated: "20/10/2023",
  //     deskripsi: this.deskripsi,
  //     paragraf: [this.tempParagraf]
  //   }
  //   this.ceritas.push(this.cerita)
  //   this.navController.navigateRoot('/home');

  // }
  nextPage(){
    this.currPage++
    if(this.currPage == 1){
      this.page1Display = 'block'
      this.page2Display = 'none'
      this.page3Display = 'none'
    }else if(this.currPage == 2){
      this.page1Display = 'none'
      this.page2Display = 'block'
      this.page3Display = 'none'
    }else if(this.currPage == 3){
      this.page1Display = 'none'
      this.page2Display = 'none'
      this.page3Display = 'block'
    }
  }

  prevPage(){
    this.currPage--
    if(this.currPage == 1){
      this.page1Display = 'block'
      this.page2Display = 'none'
      this.page3Display = 'none'
    }else if(this.currPage == 2){
      this.page1Display = 'none'
      this.page2Display = 'block'
      this.page3Display = 'none'
    }else if(this.currPage == 3){
      this.page1Display = 'none'
      this.page2Display = 'none'
      this.page3Display = 'block'
    }
  }

  constructor(private ceritaservice:CeritaserviceService,private navController: NavController, private route:Router) { }

  ngOnInit() {
    
  }

} 
