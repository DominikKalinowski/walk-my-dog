import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  NgModule,
  OnInit,
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
  UntypedFormBuilder,
  Validators,
} from '@angular/forms';
import { CreateDogPayload } from '../../../data-access/dogs-state/payloads/create-dog.payload';

@Component({
  selector: 'app-my-dogs-ui[dogs]',
  templateUrl: './my-dogs-ui.component.html',
  styleUrls: ['./my-dogs-ui.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MyDogsUiComponent implements OnInit {
  @Input() dogs!: Dog[];

  form = this._fb.group({
    name: ['', [Validators.required]],
    breed: [''],
  });

  constructor(private readonly _fb: NonNullableFormBuilder) {}

  ngOnInit(): void {}
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
