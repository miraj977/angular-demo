import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService) {}
  canActivate() {
    const localAuth: boolean = !!Number(localStorage.getItem('isin'));
    return this.authService.isAuthenticated || localAuth ? true : false;
  }
}
