import { Injectable } from '@angular/core';
import { DOG_ACTIONS } from './dogs.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, repeat, switchMap, tap } from 'rxjs';
import { HotToastService } from '@ngneat/hot-toast';
import { DogsApiService } from '../services/dogs-api.service';

@Injectable()
export class DogsEffects {
  create$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DOG_ACTIONS.create),
      switchMap((action) => this.apiService.create(action)),
      map((dog) => DOG_ACTIONS.createSuccess(dog)),
      tap(() => this.toast.success('Prepare for a walk :)')),
      catchError((error) => of(DOG_ACTIONS.createFail(error))),
      tap(() => this.toast.error('Something went wrong :(')),
      repeat()
    )
  );

  getAll$ = createEffect(() =>
    this.actions$.pipe(
      ofType(DOG_ACTIONS.getAll),
      switchMap(() => this.apiService.getAll()),
      map((dogs) => DOG_ACTIONS.getAllSuccess({ dogs })),
      catchError((error) => of(DOG_ACTIONS.createFail(error))),
      repeat()
    )
  );

  constructor(
    private actions$: Actions,
    private apiService: DogsApiService,
    private toast: HotToastService
  ) {}
}
