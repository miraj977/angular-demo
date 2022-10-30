import { Component, OnInit } from '@angular/core';
import { Book } from 'src/types/Book';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}

  ngOnInit(): void {}

  getCart() {
    return this.cartService.getCart();
  }
  getTotalItems() {
    return this.cartService.getTotalItems();
  }
  getTotalPrice() {
    return this.cartService.getTotalPrice();
  }

  addToCart(book: Book) {
    return this.cartService.addToCart(book);
  }

  removeCartItem(book: Book) {
    return this.cartService.removeCartItem(book);
  }
}
