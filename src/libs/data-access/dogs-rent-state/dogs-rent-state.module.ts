import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import {
  DOGS_RENT_FEATURE_KEY,
  initialState as dogsRentInitialState,
  dogsRentReducer,
} from "./+state/dogs-rent.reducer";
import { DogsRentEffects } from "./+state/dogs-rent.effects";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(DOGS_RENT_FEATURE_KEY, dogsRentReducer, {
      initialState: dogsRentInitialState,
    }),
    EffectsModule.forFeature([DogsRentEffects]),
  ],
})
export class DogsRentStateModule {}
