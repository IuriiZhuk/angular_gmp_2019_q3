import { createAction, props } from '@ngrx/store';
import { LoginRequestModel, TokenRequestModel, IUser, NameModel } from 'src/app/core/models/user';

export const LOG_IN = createAction(
  '[Login Page] Login',
  props<{ user: LoginRequestModel }>()
);

export const LOG_IN_SUCCESS = createAction(
  '[Login Page] Login success',
  props<{ token: TokenRequestModel }>()
);

export const LOG_IN_FAILED = createAction(
  '[Login Page] Login fail',
  props<{ error: any }>()
);

export const LOG_OUT = createAction(
  '[Login Page] Logout',
  props<{ user: LoginRequestModel }>()
);

export const LOG_OUT_SUCCESS = createAction(
  '[Login Page] Logout success',
);

export const LOG_OUT_FAILED = createAction(
  '[Login Page] Logout fail',
  props<{ error: any }>()
);

export const GET_USER_INFO = createAction(
  '[Login Page] Get user info',
  props<{ token: TokenRequestModel }>()
);

export const GET_USER_INFO_SUCCESS = createAction(
  '[Login Page] Get user info success',
  props<{ user: IUser }>()
);

export const GET_USER_INFO_FAILED = createAction(
  '[Login Page] Get user info fail',
  props<{ error: any }>()
);



