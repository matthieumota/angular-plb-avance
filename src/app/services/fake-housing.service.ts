import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { House } from '../models/house';

@Injectable({
  providedIn: 'root'
})
export class FakeHousingService {
  all(): Observable<House[]> {
    return of([
      { id: 1, name: 'Toto', city: 'Paris', photo: '', rooms: 1, wifi: true, price: 10000, rental: 500 }
    ])
  }
}
