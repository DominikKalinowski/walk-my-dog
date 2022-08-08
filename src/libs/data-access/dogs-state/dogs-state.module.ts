import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import {
  DOGS_FEATURE_KEY,
  initialState as dogsInitialState,
  dogsReducer,
} from "./+state/dogs.reducer";
import { DogsEffects } from "./+state/dogs.effects";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(DOGS_FEATURE_KEY, dogsReducer, {
      initialState: dogsInitialState,
    }),
    EffectsModule.forFeature([DogsEffects]),
  ],
})
export class DogsStateModule {}
