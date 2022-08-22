import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { MyDogsUiComponentModule } from '../../ui/my-dogs-ui/my-dogs-ui.component';
import { RouterModule } from '@angular/router';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { of } from 'rxjs';
import { Dog } from 'src/libs/shared/domain/dog.type';
import { DOG_ACTIONS } from 'src/libs/data-access/dogs-state/+state/dogs.actions';

@Component({
  selector: 'app-my-dogs-feature',
  templateUrl: './my-dogs-feature.component.html',
  styleUrls: ['./my-dogs-feature.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyDogsFeatureComponent {
  dogs$ = of([]);
  constructor(private readonly _store: Store) {}

  handleOnSave(value: Omit<Dog, 'id'>): void {
    this._store.dispatch(DOG_ACTIONS.create(value));
  }
}

@NgModule({
  declarations: [MyDogsFeatureComponent],
  imports: [
    MyDogsUiComponentModule,
    RouterModule.forChild([{ path: '**', component: MyDogsFeatureComponent }]),
    CommonModule,
  ],
  exports: [MyDogsFeatureComponent],
})
export class MyDogsFeatureComponentModule {}
