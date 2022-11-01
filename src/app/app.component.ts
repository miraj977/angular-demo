import { Component, OnInit } from '@angular/core';
import { CartService } from './services/cart.service';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from 'firebase.config';
import { AuthService } from './auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(
    private cartService: CartService,
    private authService: AuthService
  ) {}
  isShowCart: boolean = false;
  getCart() {
    return this.cartService.getCart();
  }
  getTotalItems() {
    return this.cartService.getTotalItems();
  }

  isAuthenticated() {
    return (
      this.authService.isAuthenticated || !!Number(localStorage.getItem('isin'))
    );
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit(): void {
    initializeApp(firebaseConfig);
  }
}
