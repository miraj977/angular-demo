import { Component } from '@angular/core';
import { CartService } from './services/cart.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private cartService: CartService) {}
  isShowCart: boolean = false;
  getCart() {
    return this.cartService.getCart();
  }
  getTotalItems() {
    return this.cartService.getTotalItems();
  }
}
