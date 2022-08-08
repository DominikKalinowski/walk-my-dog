import { DOG_RENT_ACTIONS } from './dogs-rent.actions';
import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { DogRent } from '../../../shared/domain/dog-rent.type';

export const DOGS_RENT_FEATURE_KEY = 'dogsRent';

export interface DogsRentState extends EntityState<DogRent> {
  isCreating: boolean;
  isLoading: boolean;
}

export interface DogsRentPartialState {
  readonly [DOGS_RENT_FEATURE_KEY]: DogsRentState;
}

export const adapter: EntityAdapter<DogRent> = createEntityAdapter<DogRent>();

export const initialState: DogsRentState = adapter.getInitialState({
  isCreating: false,
  isLoading: false,
});

export const dogsRentReducer = createReducer(
  initialState,
  on(DOG_RENT_ACTIONS.create, (state, payload) => ({
    ...state,
    isCreating: true,
  })),
  on(DOG_RENT_ACTIONS.createSuccess, (state, payload) => ({
    ...adapter.addOne(payload, state),
    isCreating: false,
  })),
  on(DOG_RENT_ACTIONS.getAllSuccess, (state, payload) => ({
    ...state,
    isLoading: true,
  })),
  on(DOG_RENT_ACTIONS.getAllSuccess, (state, payload) => ({
    ...adapter.setAll(payload.rents, state),
    isLoading: false,
  }))
);
