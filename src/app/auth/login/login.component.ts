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

  submit() {
    this.loginFailed = this.authService.login(this.form);
  }
}
