import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormControl,
} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { confirmPasswordValidator1, confirmPasswordValidator2 } from '../../validator/confirm-password.validator';

interface formRegister {
  username: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, NgIf],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup | any;

  formSubmitted: boolean = false;
  passwordForm: FormGroup | any;

  // passwordForm: FormGroup<any>;
  // passwordsMismatch: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}



  ngOnInit(): void {
    this.passwordForm = new FormGroup(
      {
        password1: new FormControl<string>('', [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z]).{5,}$/),
        ]),
        password2: new FormControl<string>('', [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z]).{5,}$/),
        ]),
      },
      { validators: confirmPasswordValidator1 }
    );
    this.registerForm = new FormGroup(
      {
        username: new FormControl<string>('', [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(25),
          Validators.pattern('^[a-zA-Z0-9_]+$'),
        ]),
        email: new FormControl<string>('', [
          Validators.required,
          Validators.email,
        ]),
        password: new FormControl<string>('', [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z]).{5,}$/),
        ]),
        passwordConfirm: new FormControl<string>('', [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(10),
          Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z]).{5,}$/),
        ]),
      },
      { validators: confirmPasswordValidator1 } // Apply the custom validator here
    );
  }

  onSubmit() {
    // const username = this.loginForm.get('username').value;
    // const password = this.loginForm.get('password').value;
    this.formSubmitted = true;

    if (this.registerForm.valid) {
      const formData: formRegister = this.registerForm.value;
      console.log(formData);
    } else {
      this.registerForm.markAllAsTouched();
      console.log(
        'Form is invalid:',
        this.registerForm.errors.passwordsMismatch
      );
    }
    // console.log('password match?', this.passwordMatchValidator());
  }

  onSubmitx() {
    this.formSubmitted = true;
    if (this.passwordForm.valid) {
      // Handle form submission
      console.log(this.passwordForm.value);
    }
  }
}
// note explanation for regex
// ^: Asserts the start of the string.
// (?=.*[a-z]): Asserts that at least one lowercase letter is present.
// (?=.*[A-Z]): Asserts that at least one uppercase letter is present.
// (?=.*\d): Asserts that at least one digit is present.
// (?=.*[!@#$%^&*()_+=[\]{};':"\\|,.<>?/~])`: Asserts that at least one special character is present.
// .{8,}: Ensures the total length is at least 8 characters.
// $: Asserts the end of the string.
