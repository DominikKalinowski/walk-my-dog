import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { dogsQuery } from '../../../data-access/dogs-state/+state/dogs.selectors';
import { Store } from '@ngrx/store';
import { CreateRentPayload } from '../../../data-access/dogs-rent-state/payloads/create-rent.payload';
import { DOG_RENT_ACTIONS } from '../../../data-access/dogs-rent-state/+state/dogs-rent.actions';
import { FindADogUiComponentModule } from '../../ui/find-a-dog-ui/find-a-dog-ui.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-find-a-dog-feature',
  templateUrl: './find-a-dog-feature.component.html',
  styleUrls: ['./find-a-dog-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FindADogFeatureComponent {
  dogs$ = this._store.select(dogsQuery.allDogs);
  constructor(private readonly _store: Store) {}

  onCreateRent(rent: CreateRentPayload): void {
    this._store.dispatch(DOG_RENT_ACTIONS.create(rent));
  }
}

@NgModule({
  declarations: [FindADogFeatureComponent],
  imports: [
    FindADogUiComponentModule,
    CommonModule,
    RouterModule.forChild([
      { path: '**', component: FindADogFeatureComponent },
    ]),
  ],
  exports: [FindADogFeatureComponent],
})
export class FindADogFeatureComponentModule {}
