# Egzamin - Akademia Angulara

Witajcie - ten projekt jest waszym zadaniem praktycznym w ramach egzaminu.

Wasze zadanie polega na poprawieniu go bądź dopisaniu brakujących funkcjonalności.

Wszystkie zadania zostały oznaczone notką `@TODO`.

Przewiduje się też zagadnienia "ponadprogramowe", oznaczone przez 🤯\*\*
Jeśli starczy ci czasu możesz wziąć się za nie.

Na koniec waszym zadaniem będzie lint całego projektu, w `tsconfig.json` oraz `.eslintrc.json` znajdziecie
reguły, które będą uwzględnione.

Nie udało mi się uniknąć pewnych zależności więc zachęcam do wykonywania zgodnego z numeracją.

**Wszystkie zadania:**

1. @TODO: 1) zaprovide'uj RestApiInterceptor
2. @TODO: 2) Użyj routera outletu do projekcji kontentu (<router-outlet>)
3. @TODO: 3) Zadeklaruj scieżki:
   1. Dla komponentu `MyDogsFeatureComponent`: `'my-dogs'`
   2. Dla komponentu `FindADogFeatureComponent`: `'find-a-dog'`
   3. Dla komponentu `HomeComponent`: `''`

_lazy loading dla ścieżek `'my-dogs'` i `'find-a-dog'`, eager dla pozostałych_

Dodatkowo dla ścieżek niezgodnych z żadną z zadeklarowanych chcemy być przekierowani do ścieżki `''`

4. @TODO: 4) Napisz effecty w user store dla akcji Sign Up,
   1. on Sign Up wysyła POST pod `/user`, przekazuje zwróconą wartość do Sign Up Success lub błąd do Sign Up Fail,
   2. on Sign Up Success ustawia zwróconą wartość id w localstorage pod kluczem `user_id`,
      oraz wyświetla success toast o treści `Successfully signed up!`, (skorzystaj z HotToastService zaprovidowanego do klasy efektów)
   3. on Sign Up Fail wyświetla error toast o treści `Sign up failed!`
5. 🤯\*\* @TODO: 5) Napisz test sprawdzający czy właściwy error toast wyświetli się po zdispatchowaniu akcji Sign Up z zamockowanym requestem zwracającym error
6. @TODO: 6) reducer na akcje `Sign Up Success` oraz `Log In Success` ustawi otrzymane dane użytkownika i propsa isLoading na false w state'cie
7. @TODO: 7) Wywołaj akcję login jeśli w local storage znajduje się userId na inicjację user state’u (wykorzystaj hook ngrxOnInitEffects)
8. @TODO: 8) Uzupełnij customową dyrektywę `ShowForLoggedInDirective` która bazując na wartości ze statu o tym czy użytkownik jest zalogowany,
   doda lub usunie element na który została nałożona
9. @TODO: 9) Nałóż stworzoną dyrektywę na sign-up.component użyty w home.component tak aby element wyświetlał się tylko dla niezalogowanych użytkowników
10. @TODO: 10) Nałóż tą samą dyrektywę na oba przyciski z navbara (`My dogs` i `Find a dog`) aby nie wyświetlały się dla niezalogowanych użytkowników
11. @TODO: 11) Uzupełnij LoggedInGuard tak aby zwracał true tylko dla zalogowanych użytkowników
    (użyj selektora userQuery.user do stwierdzenia czy user jest zdefiniowany),
    w przeciwnym razie przekieruj na '' (home component)
12. @TODO: 12) Użyj guard'a na odpowiednich ścieżkach
13. @TODO: 13) Spraw aby przycisk Sign up był w stanie disabled po wysłaniu requestu aż do otrzymania odpowiedzi (skorzustaj z selectora `userQuery.isLoading`)
14. @TODO: 14) Po pomyślnym zarejestrowaniu/zalogowaniu w miejscu formularza rejestracji powinien pojawić się nagłówek `How's your day, {{username}}`,
    gdzie w miejscu {{username}} powinien znajdować się imię użytkownika _po zalogowaniu backend zawsze zwraca `moje imię` jako imię_
15. @TODO: 15) napisz isDefined type guard który będzie sprawdzał czy obiekt nie ma wartości undefined lub null i odpowiednio go typował
16. @TODO: 16) Zdispatchuj akcję DOG_ACTIONS.create po kliknięciu przycisku `save dog`, nie providuj Store do UI komponentu!
    Przekaż event do feature (smart) komponentu poprzez @Output i zdispatchuj akcję tam.

# WalkMyDog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.1.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng g @ngneat/aim:component component-name` to generate a new component. You can also use `ng g @ngneat/aim:directive|pipe or ng generate service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
