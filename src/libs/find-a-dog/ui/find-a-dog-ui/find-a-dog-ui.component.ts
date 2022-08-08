import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
} from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { PageCardComponentModule } from '../../../shared/ui/page-card/page-card.component';
import { MatExpansionModule } from '@angular/material/expansion';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Dog } from '../../../shared/domain/dog.type';
import { CreateRentPayload } from '../../../data-access/dogs-rent-state/payloads/create-rent.payload';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-find-a-dog-ui',
  templateUrl: './find-a-dog-ui.component.html',
  styleUrls: ['./find-a-dog-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FindADogUiComponent {
  @Input() dogs!: Dog[];
  @Output() createRent = new EventEmitter<CreateRentPayload>();

  form = this._fb.group({
    from: ['', [Validators.required]],
    to: ['', [Validators.required]],
  });

  constructor(private readonly _fb: NonNullableFormBuilder) {}

  emitCreateRent(dogId: number): void {
    this.createRent.emit({ ...this.form.getRawValue(), dogsId: [dogId] });
  }
}

@NgModule({
  declarations: [FindADogUiComponent],
  imports: [
    MatCardModule,
    PageCardComponentModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [FindADogUiComponent],
})
export class FindADogUiComponentModule {}
