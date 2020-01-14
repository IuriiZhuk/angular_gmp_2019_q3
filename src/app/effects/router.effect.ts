import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

import * as RouterActions from '../actions';
import { tap } from 'rxjs/internal/operators/tap';

@Injectable()

export class RouterEffects {

  navigate$ = createEffect(() => this.actions$.pipe(
    ofType(RouterActions.GO),
    tap(({ path, query: queryParams, extras }) => {
      this.router.navigate(path, { queryParams, ...extras });
    })
  ), { dispatch: false });

  navigateBack$ = createEffect(() => this.actions$.pipe(
    ofType(RouterActions.BACK),
    tap( () => this.location.back())
  ), { dispatch: false });

  navigateForward$ = createEffect(() => this.actions$.pipe(
    ofType(RouterActions.FORWARD),
    tap( () => this.location.forward())
  ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private router: Router,
    private location: Location
  ) {}
}
