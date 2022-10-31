import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from 'firebase.config';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private cartService: CartService) {}
  isShowCart: boolean = false;
  getCart() {
    return this.cartService.getCart();
  }
  getTotalItems() {
    return this.cartService.getTotalItems();
  }

  ngOnInit(): void {
    initializeApp(firebaseConfig);
  }
}
