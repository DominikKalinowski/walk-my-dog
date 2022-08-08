import { createAction, props } from '@ngrx/store';
import { User } from '../../../shared/domain/user.type';

const ACTION_SCOPE = '[User]';

export const USER_ACTIONS = {
  logIn: createAction(`${ACTION_SCOPE} Log In`, props<{ userId: number }>()),
  logInSuccess: createAction(`${ACTION_SCOPE} Log In Success`, props<User>()),
  logInFail: createAction(`${ACTION_SCOPE} Log In Fail`, props<Error>()),
  signUp: createAction(`${ACTION_SCOPE} Sign Up`, props<Pick<User, 'name'>>()),
  signUpSuccess: createAction(`${ACTION_SCOPE} Sign Up Success`, props<User>()),
  signUpFail: createAction(`${ACTION_SCOPE} Sign Up Fail`, props<Error>()),
};
