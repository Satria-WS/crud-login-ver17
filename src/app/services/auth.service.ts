import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // getIsAuth: string | null = localStorage.getItem('isAuth');
  // isAuth: boolean = this.getIsAuth ? JSON.parse(this.getIsAuth) : false;
  isAuth: boolean = false;

  private readonly SECOND_3SecondTime = 3;
  private readonly EXPIRATION_TIME = 10 * 60 * 1000;

  constructor() {}

  userData: any = [
    {
      username: 'admin',
      email: 'admin@gmail.com',
      password: 'Admin',
      confirmpassword: 'Admin',
    },
  ];

  setUsersToLocalStorage() {

    localStorage.setItem('users', JSON.stringify(this.userData));
    console.log(localStorage.getItem('users'));
  }
  setIsAuthToLocalStorage() {
    localStorage.setItem('isAuth', JSON.stringify(this.isAuth));
  }

  login(username: string, password: string) {
    const getFromLocalStorage: any = localStorage.getItem('users');
    const getFromLocalStorageAfterParsing = JSON.parse(getFromLocalStorage);
    const getUsernameAfterParsing = getFromLocalStorageAfterParsing[0].username;
    const getPasswrodAfterParsing = getFromLocalStorageAfterParsing[0].password;
    if (
      username === getUsernameAfterParsing &&
      password === getPasswrodAfterParsing
    ) {
      const getUsers = localStorage.getItem('users');
      console.log('users???', getUsers);
      console.log('login succesfully');
      this.isAuth = true;
      // Set authentication status and login timestamp
      localStorage.setItem('isAuth', JSON.stringify(this.isAuth));
      // this.isAuth = true;
      console.log('authAfterSubmitOnLocalStorage?', localStorage.getItem('isAuth'));
    } else {
      console.log('login failed');
    }
  }

  isLoggedIn(): boolean {
    return this.isAuth;
  }
}
