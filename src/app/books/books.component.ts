import { Component, OnInit } from '@angular/core';
import {Book} from '../types/Book'


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books : Book[]= [
    {
      bookname:"Clean Code",
      authorname : "Robert C",
      imagesrc : 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMV9jdXRlXzNkX2lsbHVzdHJhdGlvbl9vZl9hX3N0YWNrX29mX2Jvb2tzX2lzb2xhdF81MjhhNmU5Ni0zZjllLTRlOGQtYmEyNy1lZGU3OWU0NTg0YTAucG5n.png',
      bookprice:500

    },
    {
      bookname:"Clean Code 2",
      authorname : "Robert C 2",
      imagesrc : 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMV9jdXRlXzNkX2lsbHVzdHJhdGlvbl9vZl9hX3N0YWNrX29mX2Jvb2tzX2lzb2xhdF81MjhhNmU5Ni0zZjllLTRlOGQtYmEyNy1lZGU3OWU0NTg0YTAucG5n.png'
      ,bookprice:600
    },
    {
      bookname:"Clean Code",
      authorname : "Robert C",
      imagesrc : 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMV9jdXRlXzNkX2lsbHVzdHJhdGlvbl9vZl9hX3N0YWNrX29mX2Jvb2tzX2lzb2xhdF81MjhhNmU5Ni0zZjllLTRlOGQtYmEyNy1lZGU3OWU0NTg0YTAucG5n.png'
      ,bookprice:700

    },
    {
      bookname:"Clean Code 2",
      authorname : "Robert C 2",
      imagesrc : 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMV9jdXRlXzNkX2lsbHVzdHJhdGlvbl9vZl9hX3N0YWNrX29mX2Jvb2tzX2lzb2xhdF81MjhhNmU5Ni0zZjllLTRlOGQtYmEyNy1lZGU3OWU0NTg0YTAucG5n.png'
      ,bookprice:800
    }
  ]

  // bookname : string = "Clean Code";
  // authorname : string="Robert C";

  // src: string =
  //  'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMV9jdXRlXzNkX2lsbHVzdHJhdGlvbl9vZl9hX3N0YWNrX29mX2Jvb2tzX2lzb2xhdF81MjhhNmU5Ni0zZjllLTRlOGQtYmEyNy1lZGU3OWU0NTg0YTAucG5n.png';
  // bookname2 : string=  'pragmatic programmer';
  // authorname2 :string = "dee";

  // src2: string =
  // 'https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMV9jdXRlXzNkX2lsbHVzdHJhdGlvbl9vZl9hX3N0YWNrX29mX2Jvb2tzX2lzb2xhdF81MjhhNmU5Ni0zZjllLTRlOGQtYmEyNy1lZGU3OWU0NTg0YTAucG5n.png';
  
  // isDisabled :boolean = false;

  // handleClick(){
  //   this.isDisabled = true;
  // }

  myName:string = "";

  // handleInput(event:any){
  //   this.myName = event.target.value;
  // }

  constructor() { }

  ngOnInit(): void {
  }

  isShowing : boolean = true;

  // tooggleBook(){
  //   this.isShowing = !this .isShowing;
  // }

  addToCart(book : Book){
    console.log(book);

  }
}
