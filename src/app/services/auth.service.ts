import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // getIsAuth: any = localStorage.getItem('isAuth');
   isAuth: boolean = JSON.parse(localStorage.getItem('isAuth') || 'false');
  // isAuth: boolean = false;
  // isAuthLocalStorage: boolean = JSON.parse(localStorage.getItem('isAuth'));
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
    const setUsers = localStorage.setItem('users', JSON.stringify(this.userData));
    const getUsers = localStorage.getItem('users');
    console.log(getUsers);
    return setUsers;
  }
  setIsAuthToLocalStorage() {
    const setisAuth = localStorage.setItem('isAuth', JSON.stringify(this.isAuth));
    const getisAuth = localStorage.getItem('isAuth');
    return setisAuth;
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
      console.log(true);
      console.log('login succesfully');
       // Set authentication status and login timestamp
       localStorage.setItem('isAuth', JSON.stringify(true));
      // this.isAuth = true;
      console.log('authAfterSubmit???', this.isAuth);
    } else {
      console.log(false);
    }

  }

  isLoggedIn(): boolean {
    return this.isAuth;
  }
}
