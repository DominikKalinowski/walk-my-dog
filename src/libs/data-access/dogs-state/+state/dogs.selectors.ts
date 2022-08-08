import { createFeatureSelector, createSelector } from '@ngrx/store';
import { adapter, DOGS_FEATURE_KEY, DogsState } from './dogs.reducer';
import {
  getUserState,
  userQuery,
} from '../../user-state/+state/user.selectors';
import { isDefined } from '../../../shared/utils/is-defined.util';

// Lookup the 'Dogs' feature state managed by NgRx
const getDogsState = createFeatureSelector<DogsState>(DOGS_FEATURE_KEY);

export const dogsQuery = {
  allDogs: createSelector(getDogsState, adapter.getSelectors().selectAll),
  myDogs: createSelector(getDogsState, getUserState, (dogsState, userState) =>
    userState.user?.dogs
      .map((dogId) => dogsState.entities[dogId])
      .filter(isDefined)
  ),
  isCreating: createSelector(getDogsState, (state) => state.isCreating),
  isLoading: createSelector(getDogsState, (state) => state.isLoading),
};
