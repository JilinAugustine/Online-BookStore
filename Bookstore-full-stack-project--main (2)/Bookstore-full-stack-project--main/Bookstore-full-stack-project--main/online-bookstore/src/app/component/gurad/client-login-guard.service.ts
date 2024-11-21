import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ClientLoginGuardService implements CanActivate {
  constructor(public router: Router) {
  }

  canActivate(): boolean {
      if (!this.isAuthenticated()) {
          this.router.navigate(['/login']);
          return false;
      } else {
          return true;
      }
  }

  isAuthenticated() {
      let isAuth: boolean = false;
      if (typeof localStorage !== 'undefined') {
          isAuth = localStorage.getItem('role') === 'user' ? true : false;
      }
      return isAuth;
  }
}

