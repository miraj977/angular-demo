import { Component, OnInit } from '@angular/core';
import { Form } from 'src/types/form';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
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

  submit() {
    console.log(this.form);
    this.authService.register(this.form);
  }
}
