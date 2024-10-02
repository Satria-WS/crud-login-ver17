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
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    const formData: formLogin = this.loginForm.value;

    if (this.loginForm.valid) {
      console.log('username:', this.loginForm.value.username);
      console.log('password:', this.loginForm.value.password);
      console.log(formData);
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
