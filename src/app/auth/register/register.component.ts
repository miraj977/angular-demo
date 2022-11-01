import { Component, OnInit } from '@angular/core';
import { Form } from 'src/types/Form';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  form: Form = {
    email: '',
    password: '',
    confirmPassword: '',
  };
  isEmpty: boolean = false;

  loading() {
    return this.authService.loading();
  }

  empty() {
    return this.isEmpty;
  }

  submit() {
    if (
      this.form.email === '' ||
      this.form.password === '' ||
      this.form.confirmPassword === ''
    ) {
      this.isEmpty = true;
      return;
    }
    this.authService.login(this.form);
  }
}
