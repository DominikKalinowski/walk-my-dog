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
  @Input() set appShowForLoggedIn(show: boolean) {
    this.showed = show;
    this.changeVisibility();
  }

  private showed = false;

  constructor(
    private readonly _store: Store,
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit(): void {
    this.changeVisibility();
  }

  private changeVisibility(): void {
    // @TODO: 8) Uzupełnij customową dyrektywę `ShowForLoggedInDirective` która bazując na wartości ze statu o tym
    //    czy użytkownik jest zalogowany, doda lub usunie element na który została nałożona
    this.viewContainer.clear();
    if (this.showed)
      this.viewContainer.createEmbeddedView(this.templateRef);
  }
}

@NgModule({
  declarations: [ShowForLoggedInDirective],
  imports: [],
  exports: [ShowForLoggedInDirective],
})
export class ShowForLoggedInDirectiveModule {}
