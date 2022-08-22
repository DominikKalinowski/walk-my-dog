import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import {
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Store } from '@ngrx/store';
import { USER_ACTIONS } from '../../../data-access/user-state/+state/user.actions';
import { CommonModule } from '@angular/common';
import { userQuery } from '../../../data-access/user-state/+state/user.selectors';
import {
  ShowForLoggedInDirective,
  ShowForLoggedInDirectiveModule,
} from '../../../shared/directives/show-for-logged-in/show-for-logged-in.directive';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SignUpComponent {
  form = this._fb.group({
    name: ['', [Validators.required]],
  });
  isLoading$ = this._store.select(userQuery.isLoading);

  constructor(
    private readonly _fb: NonNullableFormBuilder,
    private readonly _store: Store
  ) {}

  signUp(): void {
    this._store.dispatch(USER_ACTIONS.signUp(this.form.getRawValue()));
  }
}

@NgModule({
  declarations: [SignUpComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
  ],
  exports: [SignUpComponent],
  providers: [ShowForLoggedInDirective],
})
export class SignUpComponentModule {}
