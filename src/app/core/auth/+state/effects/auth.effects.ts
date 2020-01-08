import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as fromAuthenticationActions from '../actions/auth.actions';
import * as fromRouterActions from '../../../../actions/router.actions';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { AuthorizationService } from '../../service/authorization.service';
import { LoginRequestModel, TokenRequestModel, IUser } from 'src/app/core/models/user';
import { of } from 'rxjs/internal/observable/of';


@Injectable()

export class AuthentificationEffects {

  login$ = createEffect(() =>
    this.actions$.pipe(
    ofType(fromAuthenticationActions.LOG_IN),
    mergeMap(
      ({ user }) => this.authService.logIn(user)
        .pipe(
          map((tokenReq: TokenRequestModel) => fromAuthenticationActions.LOG_IN_SUCCESS({ token: tokenReq })),
          catchError((error) => of(fromAuthenticationActions.LOG_IN_FAILED({error})))
          ))
    ));

  getUserInfo$ = createEffect(() => this.actions$.pipe(
    ofType(fromAuthenticationActions.LOG_IN_SUCCESS),
    mergeMap(
      ({ token }) => this.authService.getUserInfo(token).pipe(
        map((user: IUser) => fromAuthenticationActions.GET_USER_INFO_SUCCESS({ user})),
        catchError((error) => of(fromAuthenticationActions.GET_USER_INFO_FAILED({error})))
      )
    )
  ));

  setTokenToLocalStorage$ = createEffect(() => this.actions$.pipe(
    ofType(fromAuthenticationActions.GET_USER_INFO_SUCCESS),
    map(({ user }) => {
      this.authService.setTokenToLocalStorage(user.fakeToken);
      return fromRouterActions.GO({ path: ['/courses'], });
    })
  ));


  constructor(
    private actions$: Actions,
    private authService: AuthorizationService,
  ) { }
}
