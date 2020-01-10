import {Action, createReducer, on, createFeatureSelector, createSelector} from '@ngrx/store';
import {IUser, NameModel, TokenRequestModel} from 'src/app/core/models/user';
import * as fromAuthenticationActions from '../actions/auth.actions';


export const authentificationFeatureKey = 'authentification';

export interface AuthentificationState {
  isAuthenticated: boolean;
  token: TokenRequestModel;
  user: NameModel;
  errorMessage: string | null;
}

export const initialState: AuthentificationState = {
  isAuthenticated: false,
  token: null,
  user: null,
  errorMessage: null
};


const authentificationReducer = createReducer(initialState,
  on(
    fromAuthenticationActions.LOG_IN_SUCCESS,
    fromAuthenticationActions.GET_USER_TOKEN_FROM_LOCAL_STORAGE_SUCCESS,
    ((state: AuthentificationState, {token}) => ({...state, isAuthenticated: true, token}))
  ),
  on(
    fromAuthenticationActions.GET_USER_INFO_SUCCESS,
    ((state: AuthentificationState, {user}) => ({...state, user: user.name}))
  ),
  on(
    fromAuthenticationActions.LOG_OUT_SUCCESS,
    ((state: AuthentificationState) => ({...state, ...initialState}))
  ),
);

export function reducer(state: AuthentificationState | undefined, action: Action) {
  return authentificationReducer(state, action);
}

export const getAuthentificationState = createFeatureSelector<AuthentificationState>(
  authentificationFeatureKey
);

export const getIsAuthenticated = createSelector(
  getAuthentificationState,
  (state: AuthentificationState): boolean => state.isAuthenticated
);

export const getToken = createSelector(
  getAuthentificationState,
  (state: AuthentificationState): TokenRequestModel => state.token
);

export const getUser = createSelector(
  getAuthentificationState,
  (state: AuthentificationState): NameModel => state.user
);

export const getError = createSelector(
  getAuthentificationState,
  (state: AuthentificationState): string | null => state.errorMessage
);
