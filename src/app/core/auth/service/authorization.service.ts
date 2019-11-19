import { Injectable } from '@angular/core';
import { IUser, AuthUser, UserCredential } from '../../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  private mockUser: AuthUser = {
    id: 'mockUserId',
    firstName: 'firstName',
    lastName: 'lastName',
    isAuth: false,
    email: '',
    password: '',
  };

  constructor() { }

  public logIn(userCredentional: UserCredential) {
    const user: AuthUser = {
      ...this.mockUser,
      ...userCredentional,
      isAuth: !this.mockUser.isAuth,
    };
    this.mockUser = {
      ... user,
    };
    localStorage.setItem(this.mockUser.id, JSON.stringify(user));
  }

  public logOut() {
    const user = localStorage.getItem(this.mockUser.id);
    if (user) {
      localStorage.removeItem(this.mockUser.id);
    }
  }

  public isAuthenticated(): boolean {
    return this.mockUser.isAuth;
  }
  public getUserInfo(): IUser {
    return this.mockUser;
  }
}
