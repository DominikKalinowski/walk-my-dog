import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateDogPayload } from '../payloads/create-dog.payload';
import { Dog } from '../../../shared/domain/dog.type';

@Injectable({
  providedIn: 'root',
})
export class DogsApiService {
  constructor(private readonly _http: HttpClient) {}

  create(payload: CreateDogPayload): Observable<Dog> {
    return this._http.post<Dog>('/dogs', payload);
  }

  getAll(): Observable<Dog[]> {
    return this._http.get<Dog[]>('/dogs');
  }
}
