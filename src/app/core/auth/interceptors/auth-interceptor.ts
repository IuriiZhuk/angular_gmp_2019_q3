import {Injectable} from '@angular/core';
import {HttpRequest, HttpHandler, HttpInterceptor, HttpEvent} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthorizationService} from '../service/authorization.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthorizationService,
  ) {
  }

  public token = this.authService.getUserTokenFromLocalStorage();

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const authReq = req.clone({
      headers: req.headers.set('Authorization', this.token)
    });
    return next.handle(authReq);
  }
}
