import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IUser, LoginRequestModel, TokenRequestModel} from '../../models/user';
import {Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

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
    return this.http.post<TokenRequestModel>(url, userCred)
    .pipe(catchError((error: any) => throwError(error.json())));
  }

  public getUserInfo(token: TokenRequestModel): Observable<IUser> {
    const url = `${this.BASE_URL}/auth/userinfo`;
    return this.http.post<IUser>(url, token);
  }

  public setTokenToLocalStorage(authToken: string): void {
    localStorage.setItem('user', authToken);
  }

  public removeTokenFromLocalStorage(): void {
    localStorage.removeItem('user');
  }

  public getUserTokenFromLocalStorage(): string {
    return localStorage.getItem('user');
  }
}
