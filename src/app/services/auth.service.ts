import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth: boolean = false;

  constructor() {}

  userData = [
    {
      username: 'admin',
      email: 'admin@gmail.com',
      password: 'admin123',
      confirmpassword: 'admin123',
    },
  ];

  login() {
    return this.userData[0].username;
  }

  isLoggedIn(): boolean {
    return this.isAuth;
  }
}
