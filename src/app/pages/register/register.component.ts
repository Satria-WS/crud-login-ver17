import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgClass, NgIf } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,

} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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
  // passwordsMismatch: boolean = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group(
      {
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(25),
            Validators.pattern('^[a-zA-Z0-9_]+$'),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(10),
            Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z]).{5,}$/),
          ],
        ],
        passwordConfirm: [
          '',
          [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(10),
            Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z]).{5,}$/),
          ],
        ],
      },
      { validators: this.passwordMatchValidator }
    );
  }

  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const passwordConfirm = form.get('passwordConfirm')?.value;
    return password === passwordConfirm ? null : { passwordsMismatch: true };
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
}

// note explanation for regex
// ^: Asserts the start of the string.
// (?=.*[a-z]): Asserts that at least one lowercase letter is present.
// (?=.*[A-Z]): Asserts that at least one uppercase letter is present.
// (?=.*\d): Asserts that at least one digit is present.
// (?=.*[!@#$%^&*()_+=[\]{};':"\\|,.<>?/~])`: Asserts that at least one special character is present.
// .{8,}: Ensures the total length is at least 8 characters.
// $: Asserts the end of the string.
