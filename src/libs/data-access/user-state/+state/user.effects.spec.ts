import { TestBed } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { NxModule } from '@nrwl/angular';
import { UserEffects } from './user.effects';

// @TODO: 5) Napisz test sprawdzający czy właściwy error toast wyświetli się po zdispatchowaniu akcji Sign Up z zamockowanym requestem zwracającym error
// nie musi być z wykorzystaniem TestBed'a ;)

describe('UserEffects', () => {
  let actions: Observable<any>;
  let effects: UserEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        UserEffects,
        provideMockActions(() => actions),
        provideMockStore({ initialState: {} }),
      ],
    });

    effects = TestBed.inject(UserEffects);
  });
});
