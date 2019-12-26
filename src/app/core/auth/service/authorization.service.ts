import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser, LoginRequestModel, TokenRequestModel} from '../../models/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  constructor(
    private http: HttpClient,
  ) {
  }

  private BASE_URL = 'http://localhost:3004';

  public logIn(userCred: LoginRequestModel): Observable<TokenRequestModel> {
    const url = `${this.BASE_URL}/auth/login`;
    return this.http.post<TokenRequestModel>(url, userCred);
  }

  public getUserInfo(token: TokenRequestModel): Observable<IUser> {
    const url = `${this.BASE_URL}/auth/userinfo`;
    return this.http.post<IUser>(url, token);
  }

  public setTokenToLocalStorage(authToken: TokenRequestModel): void {
    localStorage.setItem('user', authToken.token);
  }

  public removeTokenFromLocalStorage(): void {
    localStorage.removeItem('user');
  }

  public getUserTokenFromLocalStorage(): string {
    return localStorage.getItem('user');
  }
}
