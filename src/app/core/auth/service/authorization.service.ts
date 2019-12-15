import { Injectable } from '@angular/core';
import { IUser, AuthUser, UserCredential } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  public checkUsernameAndPassword(umail: string, pwd: string) {

    if (umail === 'admin@admin' && pwd === '123') {
      localStorage.setItem('username', 'admin');
      return true;
    } else {
      return false;
    }
  }

  public logOut() {
      const user = localStorage.getItem('username');
      if (user) {
        localStorage.removeItem('username');
      }
    }

  public isAuthenticated(): boolean {
    return localStorage.getItem('username') ? true : false;
  }

   public getUserInfo(): string {
     return localStorage.getItem('username');
  }

}
