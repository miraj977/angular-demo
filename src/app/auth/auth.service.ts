import { Injectable } from '@angular/core';
import { Form } from 'src/types/Form';
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated: boolean = false;
  loginFailed: boolean = false;
  isLoading: boolean = false;

  constructor() {}

  login(form: Form): boolean {
    this.isLoading = true;
    const auth = getAuth();
    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        this.isAuthenticated = true;
        console.log(user);
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

  register(form: Form) {
    this.isLoading = true;
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        this.isAuthenticated = true;
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

  loading() {
    return this.isLoading;
  }
}
