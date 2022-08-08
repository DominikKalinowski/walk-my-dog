import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserLocalStorageService {
  getUserId(): number | null {
    const storageValue = localStorage.getItem('userId');
    return storageValue ? Number.parseInt(storageValue, 10): null;
  }

  setUserId(userId: number): void {
    return localStorage.setItem('userId', userId.toString(10));
  }
}
