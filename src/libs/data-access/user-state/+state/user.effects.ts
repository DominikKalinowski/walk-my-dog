import { Injectable } from '@angular/core';
import {Actions, createEffect, Effect, ofType, OnInitEffects} from '@ngrx/effects';
import { catchError, map, of, repeat, switchMap, tap } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';
import { UserApiService } from '../services/user-api.service';
import { USER_ACTIONS } from './user.actions';
import { UserLocalStorageService } from '../services/user-local-storage.service';
import { Action } from '@ngrx/store';

@Injectable()
export class UserEffects implements OnInitEffects {
  // @TODO: 7) Wywołaj akcję login jeśli w local storage znajduje się userId na inicjację user state’u (wykorzystaj hook ngrxOnInitEffects)
  ngrxOnInitEffects(): Action {
    const userId = this.storageService.getUserId();
    if (userId) {
      return USER_ACTIONS.logIn({ userId });
    }
    // 'empty' action
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

  // @TODO: 4) Napisz effecty w user store dla akcji Sign Up,


  constructor(
    private actions$: Actions,
    private apiService: UserApiService,
    private storageService: UserLocalStorageService,
    private toast: HotToastService
  ) {}
}
