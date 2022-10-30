import { Injectable } from '@angular/core';
import { Book } from 'src/types/Book';
import { Cart } from 'src/types/Cart';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  constructor() {}

  cart: Cart[] = [];

  getCart() {
    return this.cart;
  }

  addToCart(book: Book) {
    const newEntry = {
      ...book,
      count: 1,
    };
    if (!this.cart.length) {
      this.cart.push(newEntry);
      return;
    }

    let index = this.cart.findIndex((x) => x.name === book.name);
    index >= 0 ? this.cart[index].count++ : this.cart.push(newEntry);
    console.log(this.cart);
  }

  removeCartItem(book: Book) {
    let index = this.cart.findIndex((x) => x.name === book.name);
    if (index < 0) return;
    let count = this.cart[index].count;
    console.log(count, index);
    count > 1
      ? this.cart[index].count--
      : (this.cart = this.cart.filter((x) => x.name !== book.name));
    console.log(this.cart);
  }

  getTotalItems() {
    return this.cart.reduce((p, v) => p + v.count, 0);
  }

  getTotalPrice() {
    return this.cart.reduce((p, v) => p + v.count * v.price, 0);
  }
}
