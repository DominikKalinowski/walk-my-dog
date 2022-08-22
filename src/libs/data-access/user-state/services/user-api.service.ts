import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../shared/domain/user.type';
import { delay, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor(private readonly _http: HttpClient) {}

  logIn(userId: number): Observable<User> {
    // return this._http.get<User>('/user', { params: { userId } });
    return of({
      id: 1,
      name: 'abc',
      dogs: [1,2]
    })
  }

  signUp(name: string): Observable<User> {
    // delay for observing disabled state of sign up button
    // return this._http.post<User>('/user', { name }).pipe(delay(1000));
    return of({
      id: 1,
      name: 'abc',
      dogs: [1,2]
    })
  }
}
