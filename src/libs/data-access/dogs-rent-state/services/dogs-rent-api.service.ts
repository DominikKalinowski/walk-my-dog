import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CreateRentPayload } from '../payloads/create-rent.payload';
import { DogRent } from '../../../shared/domain/dog-rent.type';

@Injectable({
  providedIn: 'root',
})
export class DogsRentApiService {
  constructor(private readonly _http: HttpClient) {}

  create(rent: Omit<DogRent, 'id'>): Observable<DogRent> {
    return this._http.post<DogRent>('/rent', rent);
  }

  getAll(): Observable<DogRent[]> {
    return this._http.get<DogRent[]>('/rent');
  }
}
