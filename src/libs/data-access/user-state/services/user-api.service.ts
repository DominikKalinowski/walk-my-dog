import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../shared/domain/user.type';
import { delay, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserApiService {
  constructor(private readonly _http: HttpClient) {}

  logIn(userId: number): Observable<User> {
    return this._http.get<User>('/user', { params: { userId } });
  }

  signUp(name: string): Observable<User> {
    return this._http.post<User>('/user', { name }).pipe(delay(1000));
  }
}
