import { createAction, props } from '@ngrx/store';
import { DogRent } from '../../../shared/domain/dog-rent.type';
import {CreateRentPayload} from "../payloads/create-rent.payload";

const ACTION_SCOPE = '[Dogs Rent]';

export const DOG_RENT_ACTIONS = {
  create: createAction(`${ACTION_SCOPE} Create`, props<CreateRentPayload>()),
  createSuccess: createAction(
    `${ACTION_SCOPE} Create Success`,
    props<DogRent>()
  ),
  createFail: createAction(`${ACTION_SCOPE} Create Fail`, props<Error>()),
  getAll: createAction(`${ACTION_SCOPE} Get All`),
  getAllSuccess: createAction(
    `${ACTION_SCOPE} Get All Success`,
    props<{ rents: DogRent[] }>()
  ),
  getAllFail: createAction(`${ACTION_SCOPE} Get All Fail`, props<Error>()),
};
