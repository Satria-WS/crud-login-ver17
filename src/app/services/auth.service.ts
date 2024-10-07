import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuth: boolean = false;

  constructor() {}

  userData: any = [
    {
      username: 'admin',
      email: 'admin@gmail.com',
      password: 'admin123',
      confirmpassword: 'admin123',
    },
  ];



  setUsersToLocalStorage() {
    const setUsers = localStorage.setItem('users', JSON.stringify(this.userData));
    const getUsers = localStorage.getItem('users');
    console.log(getUsers);
    return setUsers;
  }

  login(uername:string , password:string) {


  }

  isLoggedIn(): boolean {
    return this.isAuth;
  }
}
