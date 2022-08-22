import { ChangeDetectionStrategy, Component, NgModule } from '@angular/core';
import { SignUpComponentModule } from '../sign-up/sign-up.component';
import { ShowForLoggedInDirectiveModule } from '../../../shared/directives/show-for-logged-in/show-for-logged-in.directive';
import { Store } from '@ngrx/store';
import { userQuery } from '../../../data-access/user-state/+state/user.selectors';
import { map, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { User } from '../../../shared/domain/user.type';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
  userName$ = this._store
    .select(userQuery.user)
    .pipe(map((user) => (user ? user.name : null)));
  loggedIn = !!this.userName$;
  constructor(private readonly _store: Store) {}
}

@NgModule({
  declarations: [HomeComponent],
  imports: [
    ShowForLoggedInDirectiveModule,
    SignUpComponentModule,
    CommonModule,
  ],
  exports: [HomeComponent],
})
export class HomeComponentModule {}
