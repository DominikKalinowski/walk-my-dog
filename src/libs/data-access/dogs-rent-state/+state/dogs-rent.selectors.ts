import {createFeatureSelector, createSelector} from '@ngrx/store';
import {
  adapter,
  DOGS_RENT_FEATURE_KEY,
  DogsRentState,
} from './dogs-rent.reducer';

// Lookup the 'DogsRent' feature state managed by NgRx
const getDogsRentState = createFeatureSelector<DogsRentState>(
  DOGS_RENT_FEATURE_KEY
);

export const dogsRentQuery = {
  dogRents: adapter.getSelectors().selectAll,
  isCreating: createSelector(getDogsRentState, (state) => state.isCreating),
  isLoading: createSelector(getDogsRentState, (state) => state.isLoading)
};
