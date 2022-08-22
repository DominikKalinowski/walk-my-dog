import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs';
import { userQuery } from 'src/libs/data-access/user-state/+state/user.selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'walk-my-dog';
  constructor(private readonly _store: Store) {}

  userName$ = this._store
  .select(userQuery.user)
  .pipe(map((user) => (user ? user.name : null)));

}
