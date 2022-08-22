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
  //@TODO: 6) reducer na akcje `Sign Up Success` oraz `Log In Success` ustawi otrzymane dane użytkownika i propsa isLoading na false w state'cie
  on(USER_ACTIONS.signUp, USER_ACTIONS.logIn, (state, payload) => ({
    ...state,
    isLoading: true,
  })),
  on(USER_ACTIONS.signUpFail, USER_ACTIONS.logInFail, (state, payload) => ({
    ...state,
    isLoading: false,
  })),
  on(USER_ACTIONS.signUpSuccess, USER_ACTIONS.logInSuccess, (state, payload) => ({
    ...state,
    isLoading: false,
  }))
);
