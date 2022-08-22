import {
  Directive,
  Input,
  NgModule,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { userQuery } from '../../../data-access/user-state/+state/user.selectors';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { filter, withLatestFrom } from 'rxjs';

@UntilDestroy()
@Directive({
  selector: '[appShowForLoggedIn]',
})
export class ShowForLoggedInDirective implements OnInit {
  // ten imput definiuje czy element ma byc widoczny dla użytkownika zalogowanego czy niezalogowanego
  @Input()
  appShowForLoggedIn = true;
  showed = false;

  constructor(
    private readonly _store: Store,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.initObserveUserState();
  }

  private initObserveUserState(): void {
    this._store
      .select(userQuery.isLoading)
      .pipe(
        filter((isLoading) => !isLoading),
        withLatestFrom(this._store.select(userQuery.user)),
        untilDestroyed(this)
      )
      .subscribe(([_, user]) => this.changeVisibility(!!user));
  }

  private changeVisibility(loggedIn: boolean): void {
    if (loggedIn && this.showed) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}

@NgModule({
  declarations: [ShowForLoggedInDirective],
  imports: [],
  exports: [ShowForLoggedInDirective],
})
export class ShowForLoggedInDirectiveModule {}
