import { DOG_ACTIONS } from './dogs.actions';
import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Dog } from '../../../shared/domain/dog.type';

export const DOGS_FEATURE_KEY = 'dogs';

export interface DogsState extends EntityState<Dog> {
  isCreating: boolean;
  isLoading: boolean;
}

export interface DogsPartialState {
  readonly [DOGS_FEATURE_KEY]: DogsState;
}

export const adapter: EntityAdapter<Dog> = createEntityAdapter<Dog>({});

export const initialState: DogsState = adapter.getInitialState({
  isCreating: false,
  isLoading: false,
});

export const dogsReducer = createReducer(
  initialState,
  on(DOG_ACTIONS.create, (state, payload) => ({
    ...state,
    isCreating: true,
  })),
  on(DOG_ACTIONS.createSuccess, (state, payload) => ({
    ...adapter.addOne(payload, state),
    isCreating: false,
  })),
  on(DOG_ACTIONS.getAllSuccess, (state, payload) => ({
    ...state,
    isLoading: true,
  })),
  on(DOG_ACTIONS.getAllSuccess, (state, payload) => ({
    ...adapter.setAll(payload.dogs, state),
    isLoading: false,
  }))
);
