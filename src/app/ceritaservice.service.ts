import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CeritaserviceService {

  ceritas = [
    {
    judul: "Cerita 1",
    url: "https://c4.wallpaperflare.com/wallpaper/482/934/457/nature-beautiful-scenery-lake-water-trees-cloudy-sky-wallpaper-preview.jpg",
    writer: "Alexander",
    genre: "Action",
    status: "", //restricted or public
    like : 1,
    dateCreated: "10/10/2023",
    deskripsi: "Curabitur suscipit dui id sagittis accumsan. Nam sed leo at neque hendrerit volutpat ac eget tellus. Morbi id faucibus augue. Aliquam erat porta ante.",
    paragraf: [
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra.",
        writer: "Wensel", 
      },{
        text: "Praesent ut mollis lorem, in eleifend lorem. Nullam hendrerit diam mi.",
        writer: "Darren",
      }
    ],
    },
    {
    judul: "Cerita 2",
    url: "https://c4.wallpaperflare.com/wallpaper/482/934/457/nature-beautiful-scenery-lake-water-trees-cloudy-sky-wallpaper-preview.jpg",
    writer: "Wensel",
    genre: "Comedy",
    status: "", //restricted or public
    like : 1,
    dateCreated: "10/10/2023",
    deskripsi: "Curabitur suscipit dui id sagittis accumsan. Nam sed leo at neque hendrerit volutpat ac eget tellus. Morbi id faucibus augue. Aliquam erat porta ante.",
    paragraf : [
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra.",
        writer: "Wensel", 
      },{
        text: "Praesent ut mollis lorem, in eleifend lorem. Nullam hendrerit diam mi.",
        writer: "Darren",
      }
    ],
    },
    {
      judul: "Cerita 3",
      url: "https://c4.wallpaperflare.com/wallpaper/482/934/457/nature-beautiful-scenery-lake-water-trees-cloudy-sky-wallpaper-preview.jpg",
      writer: "Darren",
      genre: "Mystery",
      status: "", //restricted or public
      like : 1,
      dateCreated: "10/10/2023",
      deskripsi: "Curabitur suscipit dui id sagittis accumsan. Nam sed leo at neque hendrerit volutpat ac eget tellus. Morbi id faucibus augue. Aliquam erat porta ante.",
      paragraf : [
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra.",
          writer: "Wensel", 
        },{
          text: "Praesent ut mollis lorem, in eleifend lorem. Nullam hendrerit diam mi.",
          writer: "Darren",
        }
      ],
    },{
      judul: "Cerita 4",
      url: "https://c4.wallpaperflare.com/wallpaper/482/934/457/nature-beautiful-scenery-lake-water-trees-cloudy-sky-wallpaper-preview.jpg",
      writer: "Alexander",
      genre: "Romance",
      status: "", //restricted or public
      like : 1,
      dateCreated: "10/10/2023",
      deskripsi: "Curabitur suscipit dui id sagittis accumsan. Nam sed leo at neque hendrerit volutpat ac eget tellus. Morbi id faucibus augue. Aliquam erat porta ante.",
      paragraf : [
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra.",
          writer: "Wensel", 
        },{
          text: "Praesent ut mollis lorem, in eleifend lorem. Nullam hendrerit diam mi.",
          writer: "Darren",
        }
      ],
    },{
      judul: "Cerita 5",
      url: "https://c4.wallpaperflare.com/wallpaper/482/934/457/nature-beautiful-scenery-lake-water-trees-cloudy-sky-wallpaper-preview.jpg",
      writer: "Wensel",
      genre: "Drama",
      status: "", //restricted or public
      like : 1,
      dateCreated: "10/10/2023",
      deskripsi: "Curabitur suscipit dui id sagittis accumsan. Nam sed leo at neque hendrerit volutpat ac eget tellus. Morbi id faucibus augue. Aliquam erat porta ante.",
      paragraf : [
        {
          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc viverra.",
          writer: "Wensel", 
        },{
          text: "Praesent ut mollis lorem, in eleifend lorem. Nullam hendrerit diam mi.",
          writer: "Darren",
        }
      ],
    },
    ];

    

  // addPasta(p_name:string,p_url:string,p_description:string,p_price:number, p_isSpicy:boolean)
  // {
  //   this.pastas.push({name:p_name, url:p_url,
  //     description:p_description,price:p_price, isSpicy:p_isSpicy})
  // }

  constructor() { }
}
