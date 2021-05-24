import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  loggedIn = false;

  constructor() { }

  login() {
    this.loggedIn = false;
  }

  logout() {
    this.loggedIn = false;
  }

  isAuthenticated (): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });
  }
}
