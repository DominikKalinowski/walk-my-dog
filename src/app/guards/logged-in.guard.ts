import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { firstValueFrom, map } from 'rxjs';
import { Store } from '@ngrx/store';
import { userQuery } from '../../libs/data-access/user-state/+state/user.selectors';

@Injectable({
  providedIn: 'root',
})
export class LoggedInGuard implements CanActivate {
  constructor(
    private readonly _store: Store,
    private readonly _router: Router
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Promise<boolean | UrlTree> {
    /* @TODO: 11) Uzupełnij LoggedInGuard tak aby zwracał true tylko dla zalogowanych użytkowników
         (użyj selektora userQuery.user do stwierdzenia czy user jest zdefiniowany),
         w przeciwnym razie przekieruj na '' (home component)
    */

    return firstValueFrom(
      this._store
        .select(userQuery.user)
        .pipe(map((user) => (user ? true : this._router.parseUrl(''))))
    );
  }
}
