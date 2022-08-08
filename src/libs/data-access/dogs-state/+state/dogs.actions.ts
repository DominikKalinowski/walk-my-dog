import { createAction, props } from '@ngrx/store';
import { Dog } from '../../../shared/domain/dog.type';

const ACTION_SCOPE = '[Dogs]';

export const DOG_ACTIONS = {
  create: createAction(`${ACTION_SCOPE} Create`, props<Omit<Dog, 'id'>>()),
  createSuccess: createAction(`${ACTION_SCOPE} Create Success`, props<Dog>()),
  createFail: createAction(`${ACTION_SCOPE} Create Fail`, props<Error>()),
  getAll: createAction(`${ACTION_SCOPE} Get All`),
  getAllSuccess: createAction(
    `${ACTION_SCOPE} Get All Success`,
    props<{ dogs: Dog[] }>()
  ),
  getAllFail: createAction(`${ACTION_SCOPE} Get All Fail`, props<Error>()),
};
