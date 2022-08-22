import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType, OnInitEffects } from '@ngrx/effects';
import { catchError, map, of, repeat, switchMap, tap } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';
import { UserApiService } from '../services/user-api.service';
import { USER_ACTIONS } from './user.actions';
import { UserLocalStorageService } from '../services/user-local-storage.service';
import { Action } from '@ngrx/store';
import { HttpBackend, HttpClient } from '@angular/common/http';

@Injectable()
export class UserEffects implements OnInitEffects {
  ngrxOnInitEffects(): Action {
    if (localStorage.getItem('userId')) {
      this.apiService.logIn(Number(localStorage.getItem('userId')));
    }
    const userId = this.storageService.getUserId();
    if (userId) {
      return USER_ACTIONS.logIn({ userId });
    }
    return { type: '' };
  }

  logIn$ = createEffect(() =>
    this.actions$.pipe(
      ofType(USER_ACTIONS.logIn),
      switchMap((action) =>
        this.apiService.logIn(action.userId).pipe(
          map((user) => USER_ACTIONS.logInSuccess(user)),
          catchError((error) => of(USER_ACTIONS.logInFail(error)))
        )
      )
    )
  );

  logInSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(USER_ACTIONS.logInSuccess),
        tap(() => this.toast.success('Successfully logged in!'))
      ),
    { dispatch: false }
  );

  logInFail$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(USER_ACTIONS.logInFail),
        tap(() => this.toast.error('Login failed'))
      ),
    { dispatch: false }
  );

  onSignUp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(USER_ACTIONS.signUp),
      switchMap((action) =>
        this.apiService.signUp(action.name).pipe(
          map((user) => USER_ACTIONS.signUpSuccess(user)),
          catchError((error) => of(USER_ACTIONS.signUpFail(error)))
        )
      )
    )
  );

  // @TODO: 4) Napisz effecty w user store dla akcji Sign Up,

  constructor(
    private actions$: Actions,
    private apiService: UserApiService,
    private storageService: UserLocalStorageService,
    private toast: HotToastService
  ) {}
}
