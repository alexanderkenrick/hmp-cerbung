import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CeritaserviceService {

  // ceritas = [
  //   {
  //   judul: "Cerita 1",
  //   url: "https://c4.wallpaperflare.com/wallpaper/482/934/457/nature-beautiful-scenery-lake-water-trees-cloudy-sky-wallpaper-preview.jpg",
  //   writer: "Alexander",
  //   genre: "Action",
  //   status: "", //restricted or public
  //   like : 1,
  //   dateCreated: "10/10/2023",
  //   deskripsi: "Curabitur suscipit dui id sagittis accumsan. Nam sed leo at neque hendrerit volutpat ac eget tellus. Morbi id faucibus augue. Aliquam erat porta ante.",
  //   paragraf: [
  //     {
  //       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra.",
  //       writer: "Wensel", 
  //     },{
  //       text: "Praesent ut mollis lorem, in eleifend lorem. Nullam hendrerit diam mi.",
  //       writer: "Darren",
  //     }
  //   ],
  //   },
  //   {
  //   judul: "Cerita 2",
  //   url: "https://c4.wallpaperflare.com/wallpaper/482/934/457/nature-beautiful-scenery-lake-water-trees-cloudy-sky-wallpaper-preview.jpg",
  //   writer: "Wensel",
  //   genre: "Comedy",
  //   status: "", //restricted or public
  //   like : 1,
  //   dateCreated: "10/10/2023",
  //   deskripsi: "Curabitur suscipit dui id sagittis accumsan. Nam sed leo at neque hendrerit volutpat ac eget tellus. Morbi id faucibus augue. Aliquam erat porta ante.",
  //   paragraf : [
  //     {
  //       text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra.",
  //       writer: "Wensel", 
  //     },{
  //       text: "Praesent ut mollis lorem, in eleifend lorem. Nullam hendrerit diam mi.",
  //       writer: "Darren",
  //     }
  //   ],
  //   },
  //   {
  //     judul: "Cerita 3",
  //     url: "https://c4.wallpaperflare.com/wallpaper/482/934/457/nature-beautiful-scenery-lake-water-trees-cloudy-sky-wallpaper-preview.jpg",
  //     writer: "Darren",
  //     genre: "Mystery",
  //     status: "", //restricted or public
  //     like : 1,
  //     dateCreated: "10/10/2023",
  //     deskripsi: "Curabitur suscipit dui id sagittis accumsan. Nam sed leo at neque hendrerit volutpat ac eget tellus. Morbi id faucibus augue. Aliquam erat porta ante.",
  //     paragraf : [
  //       {
  //         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra.",
  //         writer: "Wensel", 
  //       },{
  //         text: "Praesent ut mollis lorem, in eleifend lorem. Nullam hendrerit diam mi.",
  //         writer: "Darren",
  //       }
  //     ],
  //   },{
  //     judul: "Cerita 4",
  //     url: "https://c4.wallpaperflare.com/wallpaper/482/934/457/nature-beautiful-scenery-lake-water-trees-cloudy-sky-wallpaper-preview.jpg",
  //     writer: "Alexander",
  //     genre: "Romance",
  //     status: "", //restricted or public
  //     like : 1,
  //     dateCreated: "10/10/2023",
  //     deskripsi: "Curabitur suscipit dui id sagittis accumsan. Nam sed leo at neque hendrerit volutpat ac eget tellus. Morbi id faucibus augue. Aliquam erat porta ante.",
  //     paragraf : [
  //       {
  //         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra.",
  //         writer: "Wensel", 
  //       },{
  //         text: "Praesent ut mollis lorem, in eleifend lorem. Nullam hendrerit diam mi.",
  //         writer: "Darren",
  //       }
  //     ],
  //   },{
  //     judul: "Cerita 5",
  //     url: "https://c4.wallpaperflare.com/wallpaper/482/934/457/nature-beautiful-scenery-lake-water-trees-cloudy-sky-wallpaper-preview.jpg",
  //     writer: "Wensel",
  //     genre: "Drama",
  //     status: "", //restricted or public
  //     like : 1,
  //     dateCreated: "10/10/2023",
  //     deskripsi: "Curabitur suscipit dui id sagittis accumsan. Nam sed leo at neque hendrerit volutpat ac eget tellus. Morbi id faucibus augue. Aliquam erat porta ante.",
  //     paragraf : [
  //       {
  //         text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra.",
  //         writer: "Wensel", 
  //       },{
  //         text: "Praesent ut mollis lorem, in eleifend lorem. Nullam hendrerit diam mi.",
  //         writer: "Darren",
  //       }
  //     ],
  //   },
  //   ];

    ceritaList(): Observable<any> {
      return this.http.get("https://ubaya.me/hybrid/160421023/uas/cerita_list.php");
    }

    ceritaSearch(judul: String): Observable<any> {
      return this.http.get("https://ubaya.me/hybrid/160421023/uas/cerita_list.php?search=" + judul);
    }

    ceritaDetail(id: number): Observable<any> {
      return this.http.get("https://ubaya.me/hybrid/160421023/uas/cerita_detail.php?id=" + id);
    }

    addCerita(judul: string, url: string, writer: string, genre: string, status:string, deskripsi:string, paragraf:string) {
      //this.pastas.push({name:p_name,url:p_url,description:p_description,price:p_price})
      const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
      const body = new URLSearchParams();
      body.set('judul', judul);
      body.set('gambar', url);
      body.set('writer', writer);
      body.set('genre', genre);
      body.set('status', status);
      body.set('deskripsi', deskripsi);
      body.set('paragraf', paragraf);
      const urlEncodedData = body.toString();
      return this.http.post(
        "https://ubaya.me/hybrid/160421023/uas/cerita_add.php", urlEncodedData, { headers });
    }

    addParagraf(idCerita :number, users_id:string, text:string) {
      //this.pastas.push({name:p_name,url:p_url,description:p_description,price:p_price})
      const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
      const body = new URLSearchParams();
      body.set('cerita_id', idCerita.toString());
      body.set('writer', users_id);
      body.set('paragraf', text);
      const urlEncodedData = body.toString();
      return this.http.post(
        "https://ubaya.me/hybrid/160421023/uas/paragraf_tambah.php", urlEncodedData, { headers });
    }

  constructor(private http: HttpClient) { }
}
