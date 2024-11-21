import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminClientGuardService implements CanActivate {
  constructor(public router: Router) {
  }

  canActivate(): boolean {
      if (!this.isAuthenticated()) {
          this.router.navigate(['/adminlogin']);
          return false;
      } else {
          return true;
      }
  }

  isAuthenticated() {
      let isAuth: boolean = false;
      if (typeof localStorage !== 'undefined') {
          isAuth = localStorage.getItem('role') === 'admin' || localStorage.getItem('role') === 'user' ? true : false;
      }
      return isAuth;
  }
}