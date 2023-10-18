import { Component, OnInit } from '@angular/core';
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
  writer:string = "User"
  genre:string = ""
  url:string = ""
  deskripsi:string = ""
  status:string = ""
  text:string = ""

  currPage = 1
  page1Display:string = 'block'
  page2Display:string = 'none'
  page3Display:string = 'none'
  pageDisplay:string = 'block'
  
  tempParagraf={
    text: "",
    writer: "",
  }

  genres=["Action", "Comedy", "Drama", "Romance", "Mystery"]
  cerita={
    judul: "",
    url: "",
    writer: "",
    genre: "",
    status: "", //restricted or public
    like : 0,
    dateCreated: "20/10/2023",
    deskripsi: "",
    paragraf: [this.tempParagraf]
  }

  handleChange(e:any) {
    this.genre = e.detail.value
  }

  addCerita(){
    this.tempParagraf={
      text: this.text,
      writer: this.writer,
    }
    this.cerita={
      judul: this.judul,
      url: this.url,
      writer: this.writer,
      genre: this.genre,
      status: this.status, //restricted or public
      like : 0,
      dateCreated: "20/10/2023",
      deskripsi: this.deskripsi,
      paragraf: [this.tempParagraf]
    }
    this.ceritas.push(this.cerita)
  }
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

  constructor(private ceritaservice:CeritaserviceService) { }

  ngOnInit() {
    this.ceritas = this.ceritaservice.ceritas
  }

} 
