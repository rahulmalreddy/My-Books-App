import { Component,EventEmitter,Input, OnInit, Output } from '@angular/core';
import { Book } from '../../types/Book';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  constructor( private cartService: CartService) { }
  
  isInCart : boolean = false;

  ngOnInit(): void {
  }
  @Input() book:Book = {} as Book;

  // @Output() bookEmitter = new EventEmitter<Book>();
  addToCart(){
    this.isInCart = true;
    this.cartService.add(this.book);
  //  this.bookEmitter.emit(this.book);
  }

  removeFromCart(){
    this.isInCart = false;
    this.cartService.remove(this.book);
  }



}
