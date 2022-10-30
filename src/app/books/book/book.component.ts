import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Book } from 'src/types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent implements OnInit {
  constructor(private cartService: CartService) {}

  addTimer: ReturnType<typeof setTimeout> = setTimeout(() => {});

  ngOnInit() {}

  ngOnDestroy() {
    this.addTimer && clearTimeout(this.addTimer);
  }

  @Input() book: Book = {} as Book;

  isAdding: boolean = false;

  addToCart() {
    //this.addToCartEmitter.emit(this.book);
    this.isAdding = true;
    this.cartService.addToCart(this.book);
    this.addTimer = setTimeout(() => {
      this.isAdding = false;
    }, 1200);
  }
}
