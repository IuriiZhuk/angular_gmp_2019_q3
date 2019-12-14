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

  // public mockUser: AuthUser = {
  //   id: 'mockUserId',
  //   firstName: 'firstName',
  //   lastName: 'lastName',
  //   isAuth: false,
  //   email: '',
  //   password: '',
  // };

  // constructor() { }

  // public logIn(userCredentional: UserCredential) {
  //   const user: AuthUser = {
  //     ...this.mockUser,
  //     ...userCredentional,
  //     isAuth: !this.mockUser.isAuth,
  //   };
  //   this.mockUser = {
  //     ... user,
  //   };
  //   localStorage.setItem(this.mockUser.id, JSON.stringify(user));
  // }

  // public logOut() {
  //   const user = localStorage.getItem(this.mockUser.id);
  //   if (user) {
  //     localStorage.removeItem(this.mockUser.id);
  //   }
  // }

  // public isAuthenticated(): boolean {
  //   return this.mockUser.isAuth;
  // }
  // public getUserInfo(): AuthUser {
  //   const user = localStorage.getItem(this.mockUser.id);
  //   const result = user ? JSON.parse(localStorage.getItem(this.mockUser.id)) : null ;
  //   return result;
  // }
}
