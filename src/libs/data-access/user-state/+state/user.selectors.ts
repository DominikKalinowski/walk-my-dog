import { createFeatureSelector, createSelector } from '@ngrx/store';
import { USER_FEATURE_KEY, UserState } from './user.reducer';

// Lookup the 'User' feature state managed by NgRx
export const getUserState = createFeatureSelector<UserState>(USER_FEATURE_KEY);

export const userQuery = {
  user: createSelector(getUserState, (state) => state.user),
  isLoading: createSelector(getUserState, (state) => state.isLoading),
};
