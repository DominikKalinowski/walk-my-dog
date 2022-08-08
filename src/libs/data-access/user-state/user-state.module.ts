import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  initialState,
  USER_FEATURE_KEY,
  userReducer,
} from './+state/user.reducer';
import { UserEffects } from './+state/user.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(USER_FEATURE_KEY, userReducer, {
      initialState,
    }),
    EffectsModule.forFeature([UserEffects]),
  ],
})
export class UserStateModule {}
