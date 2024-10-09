import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);
  const router = inject(Router);

  const getAuthLocalStorage = localStorage.getItem('isAuth');



  // if auth is true  , can go to dashboard page
  if (authService.isLoggedIn() || getAuthLocalStorage) {
    return true;
  }

  // if auth is false  , cannot into dashboard page staying on login page
  router.navigate(['/login']);
  return false;
};
