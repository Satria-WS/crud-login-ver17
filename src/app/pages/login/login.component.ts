import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

// export type IForm<T> = {
//   [K in keyof T]?: any;
// }

interface formLogin {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup | any;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(25),
          Validators.pattern('^[a-zA-Z0-9_]+$'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z]).{5,}$/),
        ],
      ],
    });
  }

  onSubmit(): void {
    const formData: formLogin = this.loginForm.value;
    const getUsername = this.loginForm.value.username;
    const getPassword = this.loginForm.value.password;

    if (this.loginForm.valid) {
      console.log('username:', getUsername);
      console.log('password:', getPassword);
      console.log(formData);

      // this.authService.login()
    }
  }

  // onSubmit() {
  //   // return this.authService.login();
  //   console.log(this.authService.login());
  // }
}

// <!-- 2xl -->
// <!--       <div class="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px]">
//    -->
