import { Injectable } from '@angular/core';
import { DOG_RENT_ACTIONS } from './dogs-rent.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {
  catchError,
  map,
  of,
  repeat,
  switchMap,
  tap,
  withLatestFrom,
} from 'rxjs';
import { DogsRentApiService } from '../services/dogs-rent-api.service';
import { HotToastService } from '@ngneat/hot-toast';
import { Store } from '@ngrx/store';
import { USER_ACTIONS } from '../../user-state/+state/user.actions';
import { userQuery } from '../../user-state/+state/user.selectors';

@Injectable()
export class DogsRentEffects {
  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DOG_RENT_ACTIONS.create),
      withLatestFrom(this.store.select(userQuery.user), (action, user) => ({
        ...action,
        userId: user!.id,
      })),
      switchMap((payload) => this.apiService.create(payload)),
      map((rent) => DOG_RENT_ACTIONS.createSuccess(rent)),
      tap(() => this.toast.success('Prepare for a walk :)')),
      catchError((error) => of(DOG_RENT_ACTIONS.createFail(error))),
      tap(() => this.toast.error('Something went wrong :(')),
      repeat()
    )
  );

  getAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DOG_RENT_ACTIONS.getAll),
      switchMap(() => this.apiService.getAll()),
      map((rents) => DOG_RENT_ACTIONS.getAllSuccess({ rents })),
      catchError((error) => of(DOG_RENT_ACTIONS.createFail(error))),
      repeat()
    )
  );

  constructor(
    private actions$: Actions,
    private apiService: DogsRentApiService,
    private toast: HotToastService,
    private store: Store
  ) {}
}
