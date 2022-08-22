import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  NgModule,
  Output,
} from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { PageCardComponentModule } from '../../../shared/ui/page-card/page-card.component';
import { MatCardModule } from '@angular/material/card';
import { Dog } from '../../../shared/domain/dog.type';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-my-dogs-ui[dogs]',
  templateUrl: './my-dogs-ui.component.html',
  styleUrls: ['./my-dogs-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyDogsUiComponent {
  @Input() dogs!: Dog[];
  @Output() dog: EventEmitter<Omit<Dog,'id'>> = new EventEmitter<Omit<Dog,'id'>>();

  form = this._fb.group({
    name: ['', [Validators.required]],
    breed: [''],
  });

  constructor(private readonly _fb: NonNullableFormBuilder) {}

  saveDog(): void {
    const dog: Omit<Dog,'id'> = {breed: this.form.value.breed!, name: this.form.value.name!};
    this.dog.emit(dog);
  }
}

@NgModule({
  declarations: [MyDogsUiComponent],
  imports: [
    MatExpansionModule,
    PageCardComponentModule,
    MatCardModule,
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [MyDogsUiComponent],
})
export class MyDogsUiComponentModule {}
