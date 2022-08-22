import { USER_ACTIONS } from './user.actions';
import { createReducer, on } from '@ngrx/store';
import { User } from '../../../shared/domain/user.type';

export const USER_FEATURE_KEY = 'user';

export type UserState = {
  user?: User;
  isLoading: boolean;
};

export interface UserPartialState {
  readonly [USER_FEATURE_KEY]: UserState;
}

export const initialState: UserState = {
  isLoading: false,
};

export const userReducer = createReducer(
  initialState,
  on(USER_ACTIONS.signUp, USER_ACTIONS.logIn, (state, payload) => ({
    ...state,
    isLoading: true,
  })),
  on(USER_ACTIONS.signUp, USER_ACTIONS.signUpSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
  })),
  on(USER_ACTIONS.signUp, USER_ACTIONS.signUpFail, (state, payload) => ({
    ...state,
    isLoading: false,
  })),
  on(USER_ACTIONS.signUpFail, USER_ACTIONS.logInFail, (state, payload) => ({
    ...state,
    isLoading: false,
  }))
);
