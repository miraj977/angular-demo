import { Injectable } from '@angular/core';
import { Form } from 'src/types/Form';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated: boolean = false;
  loginFailed: boolean = false;
  isLoading: boolean = false;

  constructor(private router: Router) {}

  loading() {
    return this.isLoading;
  }

  register(form: Form) {
    this.isLoading = true;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Registered
        const user = userCredential.user;
        this.isAuthenticated = true;
        this.router.navigate(['shop']);
        localStorage.setItem('isin', '1');
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      })
      .finally(() => {
        this.isLoading = false;
      });
  }

  login(form: Form): boolean {
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        this.isAuthenticated = true;
        this.router.navigate(['shop']);
        localStorage.setItem('isin', '1');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage, this.loginFailed);
      })
      .finally(() => {
        this.isLoading = false;
      });
    return this.loginFailed;
  }

  logout() {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        this.isAuthenticated = false;
        this.router.navigate(['login']);
        localStorage.setItem('isin', '0');
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
