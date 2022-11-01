import { Component, OnInit } from '@angular/core';
import { Form } from 'src/types/Form';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  form: Form = { email: '', password: '' };
  loginFailed: boolean = false;
  isEmpty: boolean = false;

  loading() {
    return this.authService.loading();
  }

  empty() {
    return this.isEmpty;
  }

  submit() {
    if (this.form.email === '' || this.form.password === '') {
      this.isEmpty = true;
      return;
    }
    this.loginFailed = this.authService.login(this.form);
  }
}
